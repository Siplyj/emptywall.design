import { useOutletContext } from "react-router-dom";

import classes from './ContactLayout.module.css';

import { useTranslation } from 'react-i18next';

function ContactLayout() {
	const { t } = useTranslation();

	const [showContactFormHandler] = useOutletContext();

	return (
		<div className={classes.contacts_wrapper}>
			<h1 className={classes.contacts_title}>{t('contact_form.block_title')}</h1>
			<span className={classes.contacts_description} >
				{t('contact_form.block_description')}
			</span>
			<button
				onClick={showContactFormHandler}
				className={classes.contacts_button}>
					{t('contact_form.block_button')}
			</button>
		</div>
	);
};

export default ContactLayout;