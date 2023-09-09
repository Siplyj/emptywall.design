import { Link } from 'react-router-dom';

import classes from './RenderProjectCoverLayout.module.css';

import { useTranslation } from 'react-i18next';

const RenderProjectCoverLayout = (props) => {
	const { i18n } = useTranslation();

	return (
		<li key={props.project.id} className={classes.cover_project_wrapper} >
			<Link
				className={classes.cover_project_link}
				to={`/portfolio/${props.project.project_url}`}
				onClick={() => window.scrollTo(0,0)}
			>
				<div className={classes.cover_project_image} >
					<img
						src={props.project.image_url}
						alt={props.project.project_title}
					/>
				</div>
				<div className={classes.cover_project_data}>
					<h3 className={classes.cover_project_title}>
						{props.project[i18n.language].project_title}
					</h3>
					<div className={classes.cover_project_local}>
						{props.project[i18n.language].project_location}
						{props.project[i18n.language].project_area !== "" && `, ${props.project[i18n.language].project_area}`}
					</div>
				</div>
			</Link>
		</li>
	);
};

export default RenderProjectCoverLayout;