import { useRef, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useMainNavigation } from './Contexts/MainNavigationContext';

import classes from './MainNavigation.module.css';

function MainNavigation() {
	const { t, i18n } = useTranslation();
	const mainNavigationRef = useRef(null);
	const { setMainNavigationHeight } = useMainNavigation();
	const [isLanguagesListVisible, setIsLanguagesListVisible] = useState(false);
	const [totalScrolled, setTotalScrolled] = useState(0);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleShowLanguages = () => {
		setIsLanguagesListVisible(!isLanguagesListVisible);
	};

	const handleChangeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('selectedLanguage', language);

		if (isSmallScreen) {
			const menuList = document.querySelector('#menuList');
			menuList.classList.toggle(`${classes.list_open}`);
			setIsMenuOpen(!isMenuOpen);
		}

		// handleMobileMenu();
	};

	const handleMobileMenu = (event) => {
		event.preventDefault();
		const menuList = document.querySelector('#menuList');
		menuList.classList.toggle(`${classes.list_open}`);

		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const mainNavigationHeight = mainNavigationRef.current.clientHeight*2;
		setMainNavigationHeight(mainNavigationHeight);
	}, [setMainNavigationHeight]);

	useEffect(() => {
		const header = document.querySelector('header');

		if (header) {

			if (window.innerWidth <= 636) {
				setIsSmallScreen(true);
			};

			const handleScroll = () => {
				setTotalScrolled(window.scrollY);
			};

			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo(0,0);

		if (isSmallScreen) {
			const menuList = document.querySelector('#menuList');
			menuList.classList.remove(`${classes.list_open}`);
			if (isMenuOpen) { setIsMenuOpen(!isMenuOpen) };
		};
	};

	return (
		<header
			ref={mainNavigationRef}
			className={`
				${classes.header}
				${(totalScrolled < 50 && !isMenuOpen) ? `${classes.header_transparent} ${classes.header_start_position}` :
				(totalScrolled < 50 && isMenuOpen) ? classes.header_start_position : '' }
			`}
		>

			<nav className={classes.header_navigation_wrapper}>
				<div className={classes.transformable_header}>
					<Link to="/" className={classes.header_company_name} onClick={scrollToTop} >
						EmptyWall
					</Link>
					{
						isSmallScreen && 
						<Link
							to="/"
							onClick={event => handleMobileMenu(event)}
							className={`
								${classes.header_menu_button}
								${(totalScrolled < 50 && !isMenuOpen) ? classes.header_menu_button_black : 
								(totalScrolled < 50 && isMenuOpen) ? classes.header_menu_button_white : classes.header_menu_button_white}
							`}
						/>
					}
				</div>

				<ul id="menuList" className={classes.list} >
					<li>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? `${classes.navigation_link} ${classes.active_link}` : classes.navigation_link
							}
							onClick={scrollToTop}
							end
						>
							{t('header.main')}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								isActive ? `${classes.navigation_link} ${classes.active_link}` : classes.navigation_link
							}
							onClick={scrollToTop}
						>
							{t('header.about')}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/price"
							className={({ isActive }) =>
							isActive ? `${classes.navigation_link} ${classes.active_link}` : classes.navigation_link
							}
							onClick={scrollToTop}
						>
							{t('header.price')}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive ? `${classes.navigation_link} ${classes.active_link}` : classes.navigation_link
							}
							onClick={scrollToTop}
							end
						>
							{t('header.portfolio')}
						</NavLink>
					</li>
					{/*<li>
						<NavLink
							to="/stages"
							className={({ isActive }) =>
								isActive ? `${classes.navigation_link} ${classes.active_link}` : classes.navigation_link
							}
							onClick={scrollToTop}
						>
							{t('header.stages')}
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contacts"
							className={({ isActive }) =>
								isActive ? `${classes.navigation_link} ${classes.active_link}` : classes.navigation_link
							}
							onClick={scrollToTop}
						>
							{t('header.contacts')}
						</NavLink>
					</li>*/}

					{ !isSmallScreen &&
						<li className={classes.languages_container}
	        				onClick={handleShowLanguages}
	        			>
							<NavLink
								to="/"
								onClick={event => event.preventDefault()}
								className={classes.navigation_link}
							>
								{i18n.language === 'uk' ? 'ua' : i18n.language}
							</NavLink>
						
						 
							<ul className={`
								${classes.languages_list}
								${isLanguagesListVisible ? classes.languages_show : ''}`} >
								<li
									onClick={() => handleChangeLanguage('uk')}
									className={`
										${i18n.language === 'uk' ? classes.active_link : ''}
										${totalScrolled < 50 ? classes.language_transparent : classes.language}
									`}
								>
									UA
								</li>
								<li
									onClick={() => handleChangeLanguage('ru')}
									className={`
										${i18n.language === 'ru' ? classes.active_link : ''}
										${totalScrolled < 50 ? classes.language_transparent : classes.language}
									`}
								>
									RU
								</li>
							</ul>
						</li>
					}

					{ isSmallScreen &&
						<div className={classes.languages_mobile} >
							<span
								onClick={() => handleChangeLanguage('uk')}
								className={`
									${i18n.language === 'uk' ? classes.active_link : ''}
									${classes.navigation_link}
								`}
							>
								UA
							</span>
							<span className={classes.spacer}>|</span>
							<span
								onClick={() => handleChangeLanguage('ru')}
								className={`
									${i18n.language === 'ru' ? classes.active_link : ''}
									${classes.navigation_link}
								`}
							>
								RU
							</span>
						</div>
					}
				</ul>
			</nav>
		</header>
	)
};

export default MainNavigation;