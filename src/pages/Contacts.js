import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { useMainNavigation } from '../components/Contexts/MainNavigationContext';
import ContactForm from '../components/Contacts/ContactForm';

import classes from './Contacts.module.css';

function ContactsPage() {
	const { t } = useTranslation();
	const { mainNavigationHeight } = useMainNavigation();

	return (
		<>
			<Helmet>
				<title>{t('contacts.page_title')}</title>
				<meta name="description" content={t('contacts.page_description')} />
			</Helmet>

			<div className={classes.contacts_page_wrapper} >

				<div className={classes.contacts_overlay}></div>

				<div
					className={classes.contacts_form_data}
					style={{ paddingTop: `${mainNavigationHeight}px` }}
				>
					<h1 className={`block_title ${classes.contacts_title}`}>
						{t('contacts.title')}
					</h1>
					<span className={`block_description ${classes.contacts_description}`}
						dangerouslySetInnerHTML={{ __html: t('contacts.description') }}
					/>

					<div className={classes.contacts_form_and_map} >

						<div className={classes.contacts_page_form} >
							<ContactForm />
						</div>

						<div className={classes.contacts_map} >
							<iframe
								className={classes.map}
								title="Google Maps"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d650795.3716137527!2d30.559214000000004!3d50.419315000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0xa013ea0b6c4b7dc5!2z0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1698944295321!5m2!1sru!2spl"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade">
							</iframe>
						</div>

					</div>
				</div>
			</div>
		</>
	);
};

export default ContactsPage;