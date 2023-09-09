import { Helmet } from 'react-helmet';
import HomePageImageLayout from '../components/HomePageImageLayout';
import HomePageServicesLayout from '../components/HomePageServicesLayout';
import HomePageConsultationLayout from '../components/HomePageConsultationLayout';
import ReviewsLayout from '../components/ReviewsLayout';
import HomePageProjectsListLayout from '../components/HomePageProjectsListLayout';


import classes from './Home.module.css';

import { useTranslation } from 'react-i18next';

function HomePage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('homepage.page_title')}</title>
				<meta name="description" content={t('homepage.page_description')} />
			</Helmet>

			<HomePageImageLayout />

			<div className={classes.homepage_block_wrapper} >
				<h1 className="block_title">{t('homepage.services_title')}</h1>
				
				<HomePageServicesLayout />
			</div>

			<ReviewsLayout count={3} />

			<HomePageConsultationLayout />

			<div className={classes.homepage_block_wrapper} >

				<h1 className="block_title">{t('homepage.last_projects_title')}</h1>
				
				<span className="block_description">
					{t('homepage.last_projects_description')}
				</span>

				<HomePageProjectsListLayout count={6} />
			</div>
		</>
	);
};

export default HomePage;