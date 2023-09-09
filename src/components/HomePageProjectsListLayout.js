import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import RenderProjectCoverLayout from './RenderProjectCoverLayout';

import classes from './HomePageProjectsListLayout.module.css';

function ProjectsListLayout(props) {
	const { projects } = useLoaderData();

	return (
		<Suspense fallback={<p style={{ textAlign: 'center'}}>Loading...</p>}>
			<Await resolve={projects}>
				{(loadedProjects) => <ProjectsList count={props.count} projects={loadedProjects} />}
			</Await>
		</Suspense>
	);
};

export function ProjectsList({ count, projects }) {

	const projectsList = projects.slice(0, count);

	return (
		<ul className={classes.homepage_projects_list} >
			{
				projectsList.map(project => (
					<RenderProjectCoverLayout key={project.id} project={project} />
				))
			}
		</ul>
	)
};

export default ProjectsListLayout;

export async function loadProjects() {
	const response = await fetch('https://emptywall.design/projects.json');

	if (!response.ok) {
		return <p>Something went wrong</p>
	} else {
		const resData = await response.json();
		return resData.projects;
	}
};
