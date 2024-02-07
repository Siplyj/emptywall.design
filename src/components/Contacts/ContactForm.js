import { useState } from 'react';
import { Form, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes_pop_up from './ContactForm_pop_up.module.css';
import classes_contacts_page from './ContactForm_contacts_page.module.css';

const ContactForm = () => {
	const { t } = useTranslation();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [sendingStatus, setSendingStatus] = useState('waiting');
	const location = useLocation();
	const classes = location.pathname === '/contacts' ? classes_contacts_page : classes_pop_up;

	const handleSubmit = async (event) => {
	event.preventDefault();

	try {
		const response = await fetch('https://7bfn8hhcng.execute-api.eu-central-1.amazonaws.com/default/emailSendFunction', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				phone,
				message
			}),
		});

		if (response.ok) {
			setSendingStatus('sendingOk');
		} else {
			setSendingStatus('sendingError');
		}
	} catch (error) {
		console.error('Error sending email:', error);
		setSendingStatus('sendingError');
	}
};


	return (
		<div className={classes.form_wrapper}>
			<h1 className={classes.form_title}>{t('contact_form.form_title')}</h1>

			<Form className={classes.form} onSubmit={handleSubmit} method="post" >
				<div className={classes.input_wrapper} >
					<input
						className={classes.form_input}
						type="text"
						placeholder={t('contact_form.first_name')}
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</div>
				<div className={classes.input_wrapper} >
					<input
						className={classes.form_input}
						type="text"
						placeholder={t('contact_form.last_name')}
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				<div className={classes.input_wrapper} >
					<input
						className={classes.form_input}
						type="email"
						placeholder={t('contact_form.email')}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className={classes.input_wrapper} >
					<input
						className={classes.form_input}
						type="tel"
						placeholder={t('contact_form.phone')}
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className={classes.input_wrapper} >
					<textarea
						className={classes.form_input}
						placeholder={t('contact_form.message')}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
				</div>
				<div className={classes.input_wrapper} >
					<button
						type="submit"
						className={classes.form_input}
					>
						{sendingStatus === 'waiting' && t('contact_form.status_waiting')}
						{sendingStatus === 'sending' && t('contact_form.status_sending')}
						{sendingStatus === 'sendingError' && t('contact_form.status_error')}
						{sendingStatus === 'sendingOk' && <>{t('contact_form.status_ok_1')}<br />{t('contact_form.status_ok_2')}</>}
					</button>
				</div>
			</Form>

		</div>
	);
}

export default ContactForm;