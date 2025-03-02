import { Group, Avatar, Text, Accordion, Box, Collapse, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import ProjectGmodPiano from './Projects/gmod-piano';
import ProjectMMMP from './Projects/ut-mmmp';
import ProjectUtYt from './Projects/ut-yt';
import ProjectGmodDBR from './Projects/gmod-dbr';
import ProjectUndernet from './Projects/ut-undernet';
import ProjectDespairTown from './Projects/pt-dt';
import ProjectDanganbox from './Projects/dr-db';
import ProjectDisCah from './Projects/dis-cah';
import ProjectWOBAT from './Projects/wobat';

const projectsList = [
	ProjectGmodPiano,
	ProjectDisCah,
	ProjectGmodDBR,
	ProjectMMMP,
	ProjectDespairTown,
	ProjectDanganbox,
	ProjectWOBAT,
	ProjectUndernet,
	ProjectUtYt,
]

function AccordionLabel({ label, id, description, img }) {
  return (
    <Group wrap="nowrap">
      <Avatar src={img} radius="xl" size="lg" />
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

  const firstItems = items.filter((v, i) => i < 3)
  const otherItems = items.filter((v, i) => i >= 3)

  const [opened, { toggle }] = useDisclosure(false);

	return (<>
		<Accordion chevronPosition="right" variant="contained">
			{firstItems}
		</Accordion>

		<Box mx="auto" mt="xs">
			<Group justify="center" mb={5}>
				<Button onClick={toggle}>Увидеть больше</Button>
			</Group>

			<Collapse in={opened}>
				<Accordion chevronPosition="right" variant="contained">
					{otherItems}
				</Accordion>
			</Collapse>
		</Box>
	</>);
}
export default ProjectsAccordion;
