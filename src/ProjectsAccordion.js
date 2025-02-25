import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
	{
		id: 'bender',
		image: '/imgs/gmod-piano.png',
		label: 'Autoplayble Piano',
		description: 'Аддон для Garry\'s mod',
		content: `Офигенское описание`,
	},
];

function AccordionLabel({ label, image, description }) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
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
  const items = charactersList.map((item) => (
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
