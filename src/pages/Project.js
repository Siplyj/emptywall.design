import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';
import ContactLayout from '../components/ContactLayout';

function ProjectPage() {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const [projectData, setProjectData] = useState(null);
	
	useEffect(() => {

		const fetchProject = async () => {
			const data = await loadProject();
			if (data) {
				setProjectData(data);
			} else {
				navigate('/error');
			}
		};

		fetchProject();
	}, []);

	const loadProject = async () => {
		const response = await fetch('https://emptywall.design/projects.json');

		if (!response.ok) {
			throw new Error('Something went wrong');
		}

		const resData = await response.json();

		const projectInfo = resData.projects.find(item => (
			item.project_url === window.location.href.split('/').pop()
		));

		return projectInfo;
	};


	return (
		<>
			{projectData && <Helmet>
				<title>{projectData[i18n.language].project_title}</title>
				<meta name="description" content={`${projectData[i18n.language].project_description}. ${t('project.description_ending')}`} />
			</Helmet>
			}
			{projectData && (
				<Slider projectData={projectData} />
			)}
			<ContactLayout />
		</>
	);
};

export default ProjectPage;