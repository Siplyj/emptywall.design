import { useState } from 'react';
import { Form } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AWS from 'aws-sdk';
import AWSConfig from '../../awsConfig';
import classes from './ContactForm.module.css';

const ContactForm = () => {
	const { t } = useTranslation();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [sendingStatus, setSendingStatus] = useState('waiting');

	const handleSubmit = async (event) => {
		event.preventDefault();

		AWS.config.update(AWSConfig);

		try {
			const messageBody =
			`
				Имя: ${firstName}
				Фамилия: ${lastName}
				Телефон: ${phone}
				Email: ${email}
				
				${message}
			`;

			const params = {
				Destination: {
					ToAddresses: ['info@emptywall.design'],
				},
				Message: {
					Body: {
						Text: { Data: messageBody },
					},
					Subject: {
						Data: `Сообщение с сайта от ${firstName} ${lastName} - ${window.location.href}`
					},
				},
				Source: 'info@emptywall.design',
			};

			const sendEmailPromise = new AWS.SES({apiVersion: '2010-12-01' }).sendEmail(params).promise();
			setSendingStatus('sending');
			await sendEmailPromise;

			setFirstName('');
			setLastName('');
			setEmail('');
			setPhone('');
			setMessage('');
			setSendingStatus('sendingOk');

			setTimeout(() => setSendingStatus('waiting'), 3000);
		} catch (error) {
			setSendingStatus('sendingError');
			setTimeout(() => setSendingStatus('waiting'), 3000);
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