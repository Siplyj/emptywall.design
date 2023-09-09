import classes from "./HomePageServicesLayout.module.css";

import { useTranslation } from 'react-i18next';

function HomePageServicesLayout() {
	const { t } = useTranslation();

	return (
		<div className={classes.homepage_services_wrapper} >
			<div className={classes.homepage_service} >
				<img
					src={require('../files/images/HomePage/icon-individuality.png')}
					alt="individuality"
					className={classes.homepage_services_icon}
				/>
				<h3 className={classes.homepage_services_title} >
					{t('homepage.individuality_title')}
				</h3>
				<span className={classes.homepage_services_description} >
					{t('homepage.individuality_description')}
				</span>
			</div>
			<div className={classes.homepage_service} >
				<img
					src={require('../files/images/HomePage/icon-professionalism.png')}
					alt="professionalism"
					className={classes.homepage_services_icon}
				/>
				<h3 className={classes.homepage_services_title} >
					{t('homepage.professionalism_title')}
				</h3>
				<span className={classes.homepage_services_description} >
					{t('homepage.professionalism_description')}
				</span>
			</div>
			<div className={classes.homepage_service} >
				<img
					src={require('../files/images/HomePage/icon-realizability.png')}
					alt="realizability"
					className={classes.homepage_services_icon}
				/>
				<h3 className={classes.homepage_services_title} >
					{t('homepage.realizability_title')}
				</h3>
				<span className={classes.homepage_services_description} >
					{t('homepage.realizability_description')}
				</span>
			</div>
			<div className={classes.homepage_service} >
				<img
					src={require('../files/images/HomePage/icon-uniqueness.png')}
					alt="uniqueness"
					className={classes.homepage_services_icon}
				/>
				<h3 className={classes.homepage_services_title} >
					{t('homepage.uniqueness_title')}
				</h3>
				<span className={classes.homepage_services_description} >
					{t('homepage.uniqueness_description')}
				</span>
			</div>
			<div className={classes.homepage_service} >
				<img
					src={require('../files/images/HomePage/icon-qualification.png')}
					alt="qualification"
					className={classes.homepage_services_icon}
				/>
				<h3 className={classes.homepage_services_title} >
					{t('homepage.qualification_title')}
				</h3>
				<span className={classes.homepage_services_description} >
					{t('homepage.qualification_description')}
				</span>
			</div>
			<div className={classes.homepage_service} >
				<img
					src={require('../files/images/HomePage/icon-price.png')}
					alt="price"
					className={classes.homepage_services_icon}
				/>
				<h3 className={classes.homepage_services_title} >
					{t('homepage.price_title')}
				</h3>
				<span className={classes.homepage_services_description} >
					{t('homepage.price_description')}
				</span>
			</div>
		</div>
	);
};

export default HomePageServicesLayout;