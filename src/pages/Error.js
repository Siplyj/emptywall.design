import { useRouteError, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import classes from './Error.module.css';

function ErrorPage() {
	const { t } = useTranslation();
	const error = useRouteError();

	let title = 'An error occurred!';
	let message = 'Something went wrong!';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = 'error 404';
		message = (
			<>
				The requested URL was not found on this server.
				<br />
				That is all we know.
			</>
		);
	}

	return (
			<section className={classes.error_page_wrapper}>
			<Helmet>
				<title>{t('error.page_title')}</title>
			</Helmet>
				<div className={classes.error_wrapper} >
					<div className={classes.error_message} >
						<div className={classes.error_title} >{title}</div>
						<div className={classes.error_description}>{message}</div>
						<Link className={classes.error_button} to="/">Back to home page</Link>
					</div>
				</div>
			</section>
	);
}

export default ErrorPage;