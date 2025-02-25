import Card from './Card.js';
import { Title, Flex, Space } from '@mantine/core';

import ProjectsAccordion from './ProjectsAccordion.js';

const ProjectsCard = () => (
	<Card>
		<Title order={3} mb={10}>Мои разработки</Title>

		<ProjectsAccordion />
		<Space h={10} />
	</Card>
);

export default ProjectsCard;
