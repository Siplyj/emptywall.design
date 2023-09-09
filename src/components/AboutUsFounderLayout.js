import classes from './AboutUsFounderLayout.module.css';

import { useTranslation } from 'react-i18next';

function AboutUsFounderLayout() {
	const { t } = useTranslation();

	return (
		<div className={classes.about_founder_wrapper} >
			<h1 className="block_title">{t('about_us.founder_title')}</h1>
			<span className="block_description">
				{t('about_us.founder_description')}
			</span>

			<div className={classes.about_founder} >
				<img src={require(`../files/images/AboutPage/Founder.png`)} alt="Founder" className={classes.about_founder_photo} />
				<div className={classes.about_founder_text} >
					<p>{t('about_us.founder_text_1')}</p>
					<p>{t('about_us.founder_text_2')}</p>
					<p>{t('about_us.founder_text_3')}</p>
					<p>{t('about_us.founder_text_4')}</p>
					<p>{t('about_us.founder_text_5')}</p>
					<p dangerouslySetInnerHTML={{ __html: t('about_us.founder_text_6')}} />
				</div>
			</div>
		</div>
	);
};

export default AboutUsFounderLayout;