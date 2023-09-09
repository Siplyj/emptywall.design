import { useOutletContext, Link } from 'react-router-dom';

import classes from "./HomePageConsultationLayout.module.css";
import PhoneIcon from '../files/images/HomePage/icon-phone.png';
import EmailIcon from '../files/images/HomePage/icon-email.png';
import ConsultationImage from '../files/images/HomePage/ConsultationImage.png';

import { useTranslation } from 'react-i18next';

function HomePageConsultationLayout() {
	const { t } = useTranslation();
	const [showContactFormHandler] = useOutletContext();

	return (
		<div className={classes.homepage_consultation_wrapper} >
			<div className={classes.homepage_consultation_info} >

				<h1 className={classes.homepage_consultation_title}
					dangerouslySetInnerHTML={{ __html: t('homepage.consultation_title') }}
				/>

				<span className={classes.homepage_consultation_description} >
					{t('homepage.consultation_description')}
				</span>

				<div className={classes.homepage_consultation} >
					<div className={classes.homepage_consultation_communication} >
						<img src={PhoneIcon} alt="phone" />
						<Link to="tel:+380958055066" className={classes.homepage_consultation_phone} >
							<span className={classes.homepage_consultation_phone_text} >
								+38 095 805 50 66
							</span>
						</Link>
					</div>
					<div className={classes.homepage_consultation_communication} >
						<img src={EmailIcon} alt="email" />
						<button
							onClick={showContactFormHandler}
							className={classes.homepage_consultation_email_button}>
							{t('homepage.consultation_email_button')}
						</button>
					</div>
				</div>
			</div>
			<img
				src={ConsultationImage}
				alt="consultation"
				className={classes.homepage_consultation_image}
			/>
		</div>
	);
};

export default HomePageConsultationLayout;