import SocialButton from '../SocialButton';
import { FaVk } from 'react-icons/fa';

const ProjectUndernet = {
	id: 'ut-undernet',
	label: 'UNDERNET',
	description: 'Мультиплеерная фанатская игра по Undertale для Windows',
	content: <>
		Вдохновлённая успехом <a href="https://gamejolt.com/games/dontforget/150752">DONTFORGET</a> мультиплеерная фанатская игра по Undertale на движке GameMaker: Studio.<br />
		Я занимал позицию со-основателя и главного разработчика.<br />

		<br />Дата начала разработки: Январь 2019<br />
		Дата выпуска: Не увидел свет<br />
		Статус: После того как я покинул проект, разработка была прекращена в 2020<br />
		<SocialButton mt="sm" href="https://vk.com/undernetthegame" Icon={FaVk} text="Открыть в ВКонтакте" />
	</>,
}

export default ProjectUndernet