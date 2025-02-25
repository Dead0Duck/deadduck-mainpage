import Card from './Card.js';
import { Grid, Title, Image } from '@mantine/core';

const TitleCard = () => (
	<Card>
		<Grid size="xs">
			<Grid.Col span="content">
				<Image
					radius="xl"
					h={128}
					src="/logo192.png"
				/>
			</Grid.Col>
			<Grid.Col span="auto">
				<Title order={2}>DeadDuck</Title>
				<Title order={4}>Разработчик-любитель</Title>
			</Grid.Col>
		</Grid>
	</Card>
);

export default TitleCard;
