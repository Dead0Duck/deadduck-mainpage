import Card from './Card.js';
import { Title } from '@mantine/core';

import ProjectsAccordion from './ProjectsAccordion.js';

const ProjectsCard = () => (
	<Card>
		<Title order={3} mb={10}>Мои разработки</Title>

		<ProjectsAccordion />
	</Card>
);

export default ProjectsCard;
