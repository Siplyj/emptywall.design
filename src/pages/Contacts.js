import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// import PriceLayout from '../components/PriceLayout';
// import ContactLayout from '../components/ContactLayout';

import classes from './Contacts.module.css';

function ContactsPage() {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t('contacts.page_title')}</title>
				<meta name="description" content={t('contacts.page_description')} />
			</Helmet>
			<div className={classes.contacts_page_wrapper} >
				<div className={classes.contacts_wrapper} >
					
				</div>
			</div>
		</>
	);
};

export default ContactsPage;