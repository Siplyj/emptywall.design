import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { useMainNavigation } from '../components/Contexts/MainNavigationContext';
import ContactLayout from '../components/ContactLayout';
import InfiniteScroll from '../components/InfiniteScroll';
import RenderProjectCoverLayout from '../components/RenderProjectCoverLayout';

import classes from './Portfolio.module.css';

function PortfolioPage() {
	const { t } = useTranslation();
	const [projects, setProjects] = useState([]);
	const { mainNavigationHeight } = useMainNavigation();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const data = await loadProjects();
				setProjects(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchProjects();
	}, []);

	function renderItem(project) {
		return (
			<RenderProjectCoverLayout key={project.id} project={project} />
		);
	};

	async function loadProjects() {
		const response = await fetch('https://emptywall.design/projects.json');

		if (!response.ok) {
			throw new Error('Something went wrong');
		}

		const resData = await response.json();
		return resData.projects;
	}

	return (
		<>
			<Helmet>
				<title>{t('portfolio.page_title')}</title>
				<meta name="description" content={t('portfolio.page_description')} />
			</Helmet>
			<div
				className={classes.portfolio_list_wrapper}
				style={{ paddingTop: `${mainNavigationHeight}px` }}
			>
				<ul className={classes.portfolio_projects_list}>
					<InfiniteScroll
						data={projects}
						renderItem={renderItem}
					/>
				</ul>
			</div>
			<ContactLayout />
		</>
	);
}

export default PortfolioPage;