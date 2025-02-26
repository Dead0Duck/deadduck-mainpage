import { Title, Space } from '@mantine/core';
import Card from './Card.js';
import TeamInfo from './TeamInfo.js';

const TeamsCard = () => (
	<Card>
		<Title order={3} mb={10}>Работал в</Title>

		<TeamInfo title="Despair Beyond Repair" role="Владелец, Игровой разработчик" dateStart="Ноябрь 2020" dateEnd="Октябрь 2022" href="https://www.youtube.com/@Despair_Beyond_Repair" />
		<TeamInfo title="Danganronpa Online" role="Игровой разработчик" dateStart="Февраль 2023" dateEnd="Июнь 2024" href="https://danganronpa.online" />
		<TeamInfo title="Multiscene" role="Игровой разработчик" dateStart="Март 2024" dateEnd="Настоящее время" href="https://t.me/m_scene" />
		<Space h={5} />
	</Card>
);

export default TeamsCard;
