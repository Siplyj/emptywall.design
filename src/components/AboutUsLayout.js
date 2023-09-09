import { useMainNavigation } from './Contexts/MainNavigationContext';

import classes from './AboutUsLayout.module.css';

import { useTranslation } from 'react-i18next';

function AboutUsLayout() {
	const { t } = useTranslation();
	const { mainNavigationHeight } = useMainNavigation();

	return (
		<div
			className={classes.about_us_wrapper}
			style={{ paddingTop: `${mainNavigationHeight}px` }}
		>
			<h1 className="block_title">{t('about_us.title')}</h1>
			<span className="block_description">
				{t('about_us.description')}
			</span>
			<div className={classes.about_us_text}>
				<span>{t('about_us.text_1')}</span>
				<span>{t('about_us.text_2')}</span>
				<span>{t('about_us.text_3')}</span>
			</div>
		</div>
	);
};

export default AboutUsLayout;