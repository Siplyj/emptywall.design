import classes from './HomePageImageLayout.module.css';

import { useTranslation } from 'react-i18next';

function HomePageImageLayout() {
	const { t } = useTranslation();

	return (
		<div className={classes.homepage_main_image_wrapper}>
			<div className={classes.homepage_main_image_data}>
				<h1 className="block_title">{t('homepage.main_image_title')}</h1>
			</div>
			<div className={classes.homepage_main_image_overlay} />
		</div>
	)
}

export default HomePageImageLayout;