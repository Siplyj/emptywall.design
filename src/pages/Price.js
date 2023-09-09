import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import PriceLayout from '../components/PriceLayout';
import ContactLayout from '../components/ContactLayout';

function Price() {
	const { t } = useTranslation();
	return (
		<>
			<Helmet>
				<title>{t('price.page_title')}</title>
				<meta name="description" content={t('price.page_description')} />
			</Helmet>
			<PriceLayout />
			<ContactLayout />
		</>
	);
};

export default Price;