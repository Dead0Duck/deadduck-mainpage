import { Group, Avatar, Text, Accordion } from '@mantine/core';

import ProjectGmodPiano from './Projects/gmod-piano';
import ProjectMMMP from './Projects/ut-mmmp';

const projectsList = [
	ProjectMMMP,
	ProjectGmodPiano,
]

function AccordionLabel({ label, id, description }) {
  return (
    <Group wrap="nowrap">
      <Avatar src={`/imgs/${id}.png`} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function ProjectsAccordion() {
  const items = projectsList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
export default ProjectsAccordion;
