import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import AboutUsLayout from '../components/AboutUsLayout';
import AboutUsFounderLayout from '../components/AboutUsFounderLayout';
import AboutUsFAQLayout from '../components/AboutUsFAQLayout';
import ContactLayout from '../components/ContactLayout';

function AboutPage() {
	const { t } = useTranslation();
	return (
		<>
			<Helmet>
				<title>{t('about_us.page_title')}</title>
				<meta name="description" content={t('about_us.page_description')} />
			</Helmet>
			<AboutUsLayout />
			<AboutUsFounderLayout />
			<AboutUsFAQLayout />
			<ContactLayout />
		</>
	);
};

export default AboutPage;