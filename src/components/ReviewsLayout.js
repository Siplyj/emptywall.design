import { Suspense, useState } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import classes from './ReviewsLayout.module.css';

import { useTranslation } from 'react-i18next';

function ReviewsLayout(props) {
	const { projects } = useLoaderData();

	return (
		<Suspense fallback={<p style={{ textAlign: 'center'}}>Loading...</p>}>
			<Await resolve={projects}>
				{(loadProjects) => <ReviewsList count={props.count} projects={loadProjects} />}
			</Await>
		</Suspense>
	);
};

export default ReviewsLayout;

function ReviewsList({ count, projects }) {
	const { i18n } = useTranslation();

	const projectsWithReviews = projects.filter((project) => 
		project.show_review === "true"
	);

	const [currentReview, setCurrentReview] = useState(1);
	// eslint-disable-next-line
	const [reviewWidth, setReviewWidth] = useState(document.documentElement.clientWidth);
	const [transformX, setTransformX] = useState(document.documentElement.clientWidth);

	const homepageReviews = projectsWithReviews.slice(0, count);

	const handlePrevReview = () => {
		setCurrentReview(prevReview => (
			prevReview === 1 ? count : prevReview - 1
		));
		switchReview('prev');
	};

	const handleNextReview = () => {
		setCurrentReview(prevReview => (
			prevReview === +count ? 1 : prevReview + 1
		));
		switchReview('next');
	};

	const switchReview = (direction) => {
		const reviewsBlock = document.querySelector('[class^="ReviewsLayout_homepage_reviews_list"]');
		let newTransformX;

		if (direction === 'prev') {
			console.log(count);
			newTransformX = currentReview === 1 ?
				-(reviewWidth) * (count - 1) : transformX + reviewWidth;
		}

		if (direction === 'next') {
			console.log(transformX);

			newTransformX = currentReview === count ?
				0 : -(reviewWidth * currentReview);
		}

		reviewsBlock.style.transform = `matrix(1, 0, 0, 1, ${newTransformX}, 0)`;
		setTransformX(newTransformX);
	};

	return (
		<div className={classes.homepage_reviews_wrapper} >
			<div className={classes.homepage_reviews_list} >
				{
					homepageReviews.map((review) => (
						<div key={review.id} className={classes.homepage_review_wrapper} >
							<div className={classes.homepage_review} >
								<span className={classes.homepage_review_text} >
			 						{review[i18n.language].review_text}
			 					</span>
			 					<span className={classes.homepage_review_client_name}>
									{review[i18n.language].client_name}
								</span>
								<span className={classes.homepage_review_client_location} >
									{review[i18n.language].project_location}
								</span>
							</div>
						</div>
					))
				}
			</div>
			<button
				className={classes.prev_button}
				onClick={handlePrevReview}
			/>
			<button
				className={classes.next_button}
				onClick={handleNextReview}
			/>
		</div>
	);
};

export async function loadReviews() {
	const response = await fetch('https://emptywall.design/projects.json');

	if (!response.ok) {
		return <p>Something went wrong</p>
	} else {
		const resData = await response.json();
		return resData.projects;
	}
};