import Card from './Card.js';
import { Grid, Title, Image } from '@mantine/core';

import DeadDuckImg from './imgs/DeadDuck.avif'

const TitleCard = () => (
	<Card settings={{
		pt: 'none',
		pb: 'none',
	}}>
		<Grid className='mantine-Grid-no-margin'>
			<Grid.Col span="content">
				<Image
					radius="xl"
					h={128}
					src={DeadDuckImg}
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
