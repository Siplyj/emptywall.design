import { useState, useEffect, useRef } from 'react';

import { useMainNavigation } from '../components/Contexts/MainNavigationContext';
import GetImageURL from './Slider/GetImageURL';

import classes from './Slider.module.css';

import { useTranslation } from 'react-i18next';

function Slider({projectData}) {
	const { t, i18n } = useTranslation();
	const [currentSlide, setCurrentSlide] = useState(1);
	const [slidesWidth, setSlidesWidth] = useState(0);
	const [transformX, setTransformX] = useState(slidesWidth);
	const [startX, setStartX] = useState(null);
	const [projectImages, setProjectImages] = useState(null);
	const [allImagesLoaded, setAllImagesLoaded] = useState(false);
	const { mainNavigationHeight } = useMainNavigation();

	const sliderWrapperRef = useRef(null);

	const handlePrevSlide = () => {
		setCurrentSlide(prevSlide => 
			prevSlide === 1 ? +projectData.number_of_images : prevSlide - 1
		);
		switchSlide('prev');
	};

	const handleNextSlide = () => {
		setCurrentSlide(prevSlide => 
			prevSlide === +projectData.number_of_images ? 1 : prevSlide + 1
		);
		switchSlide('next');
	};

	const handleTouchStart = (event) => {
		setStartX(event.touches[0].clientX)
	};

	const handleTouchMove = (event) => {
		if (startX === null) return;

		const deltaX = event.touches[0].clientX - startX;

		if (deltaX > 50) {
			handlePrevSlide();
			setStartX(null);
		} else if (deltaX < -50) {
			handleNextSlide();
			setStartX(null);
		}
	};

	const switchSlide = (direction) => {
		const slidesBlock = document.querySelector('[class^="Slider_slides"]');
		let newTransformX;

		if (direction === 'prev') {
			newTransformX = currentSlide === 1 ?
				-slidesWidth * (+projectData.number_of_images - 1) :
				transformX + slidesWidth;
		}

		if (direction === 'next') {
			newTransformX = currentSlide === +projectData.number_of_images ?
				0 : transformX - slidesWidth;

		}

		slidesBlock.style.transform = `matrix(1, 0, 0, 1, ${newTransformX}, 0)`;
		setTransformX(newTransformX);
	};

	useEffect(() => {
		const updateSlidesWidth = () => {
			if (sliderWrapperRef.current) {
				setSlidesWidth(sliderWrapperRef.current.getBoundingClientRect().width);
			}
		}

		updateSlidesWidth();

		window.addEventListener('resize', updateSlidesWidth);

		return () => {
			window.removeEventListener('resize', updateSlidesWidth);
		};
	}, [slidesWidth]);


	useEffect(() => {

		if (slidesWidth !== 0) {
			let slidesArr = [];

			const loadImage = (index) => {
				const imageURL = GetImageURL(index, projectData);
				const imageElement = new Image();
				imageElement.src = imageURL;

				imageElement.onload = () => {
					let imageWidth = imageElement.width;
					let imageHeight = imageElement.height;
					const aspectRatio = imageWidth / imageHeight;

					imageWidth = aspectRatio < 1 ? slidesWidth * 0.75 * aspectRatio : slidesWidth;
					imageHeight = slidesWidth * 0.75;

					slidesArr.push(
						<div
							key={index}
							className={classes.image_wrapper}
						>
							<img
								src={imageURL}
								alt={projectData.project_title}
								className={`${classes.slide_image} ${index === currentSlide ? 'active_image' : ''}`}
								style={{
									width: `${imageWidth}px`,
									height: `${imageHeight}px`,
									margin: `0px ${(slidesWidth - imageWidth) / 2}px`,
								}}
							/>
						</div>
					);

					if (index === 1) {
						setProjectImages(slidesArr);
					}

					if (index === +projectData.number_of_images) {
						slidesArr.sort((a, b) => a.key - b.key);
						setProjectImages(slidesArr);
						setAllImagesLoaded(true);
					} else {
						loadImage(index + 1);
					}
				};
			};
			loadImage(1);
		}
		// eslint-disable-next-line
	}, [projectData, slidesWidth]);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.code === 'ArrowRight') {
				handleNextSlide();
			} else if (event.code === 'ArrowLeft') {
				handlePrevSlide();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
		// eslint-disable-next-line
	}, [currentSlide, slidesWidth]);

	return (
		<div
			className={classes.project_wrapper}
			style={{ paddingTop: `${mainNavigationHeight}px` }}
		>
			<div ref={sliderWrapperRef} className={classes.slider_wrapper}>
				<div
					onTouchStart={event => handleTouchStart(event)}
					onTouchMove={event => handleTouchMove(event)}
				>
					{!allImagesLoaded && (
						<span className={classes.loader} />
					)}

					{projectData && (
						<div className={classes.slides}>
							{projectImages}
						</div>
					)}

					{projectImages && (
						<>
							<button
								className={classes.prev_button}
								onClick={handlePrevSlide}
								style={{height: `${slidesWidth * 0.75}px`}}
							/>
							<button
								className={classes.next_button}
								onClick={handleNextSlide}
								style={{height: `${slidesWidth * 0.75}px`}}
							/>
						</>
					)}

					<div className={classes.pagination_wrapper} style={{width: `${slidesWidth}px`}} >
						<span className={classes.pagination}>{currentSlide}/{+projectData.number_of_images}</span>
					</div>
				</div>
			</div>

			<div className={classes.project_info_wrapper}>
				<h5 className={classes.project_title}>{projectData[i18n.language].project_title}</h5>
				<span className={classes.project_about}>{projectData[i18n.language].project_about}</span>
				<ul>
					<li className={classes.project_params}>
						<strong>{t('project.location')}</strong>
						<span>{projectData[i18n.language].project_location}</span>
					</li>
					{
						projectData[i18n.language].project_area !== "" &&
						<li className={classes.project_params}>
							<strong>{t('project.area')}</strong>
							<span>{projectData[i18n.language].project_area}</span>
						</li>
					}
				</ul>
			</div>
		</div>
	);
}

export default Slider;