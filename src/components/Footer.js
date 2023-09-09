import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

import { useTranslation } from 'react-i18next';

function Footer() {
	const { t, i18n } = useTranslation();

	const handleChangeLanguage = (language) => {
		i18n.changeLanguage(language);
		localStorage.setItem('selectedLanguage', language);
	};

	return (
		<footer className={classes.footer_wrapper} >
			<div className={classes.footer} >
				<Link
					to="/"
					className={classes.footer_company_name}
					onClick={() => window.scrollTo(0,0)}
				>
					EmptyWall
				</Link>

				<div className={classes.languages} >
					<span
						onClick={() => handleChangeLanguage('uk')}
						className={`
							${i18n.language === 'uk' ? classes.active_language : ''}
							${classes.language}
						`}
					>
						UA
					</span>
					<span className={classes.spacer}>|</span>
					<span
						onClick={() => handleChangeLanguage('ru')}
						className={`
							${i18n.language === 'ru' ? classes.active_language : ''}
							${classes.language}
						`}
					>
						RU
					</span>
				</div>

				<div className={classes.footer_contacts} >
					<Link to="tel:+380958055066" className={`${classes.footer_contact} ${classes.footer_phone}`} >
						<span>+38 095 805 50 66</span>
					</Link>
					<div className={classes.social_networks}>
						<Link
							to="https://www.facebook.com/emptywalldesign/"
							className={`${classes.footer_contact} ${classes.footer_facebook}`}
						/>
						<Link
							to="https://www.instagram.com/empty_wall_design/"
							className={`${classes.footer_contact} ${classes.footer_instagram}`}
						/>
					</div>
					<Link to="mailto:info@emptywall.design" className={`${classes.footer_contact} ${classes.footer_email}`} >
						<span>info@emptywall.design</span>
					</Link>
				</div>

				<p className={classes.footer_text}>{t('footer.text_1')}</p>
				<p className={classes.footer_text}>{t('footer.text_2')}</p>
			</div>
		</footer>
	);
};

export default Footer;