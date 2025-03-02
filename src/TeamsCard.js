import Card from './Card.js';
import { Title } from '@mantine/core';
import TeamInfo from './TeamInfo.js';

const TeamsCard = () => (
	<Card>
		<Title order={3} mb={10}>Проекты, в которых принимал участие</Title>

		{/* <TeamInfo title="Despair Beyond Repair" role="Владелец, Игровой разработчик" dateStart="11.2020" dateEnd="10.2022" href="https://www.youtube.com/@Despair_Beyond_Repair" /> */}
		<TeamInfo title="τau τeam" role="Переводчик текста и спрайтов" dateStart="11.2018" dateEnd="10.2020" href="https://vk.com/nottauteam" />
		<TeamInfo title="Danganronpa Online" role="Игровой разработчик" dateStart="02.2023" dateEnd="06.2024" href="https://danganronpa.online" />
		<TeamInfo title="Multiscene" role="Игровой разработчик" dateStart="03.2024" href="https://t.me/m_scene" />
	</Card>
);

export default TeamsCard;
