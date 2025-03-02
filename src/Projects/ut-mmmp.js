import Img from './imgs/ut-mmmp.png';
import SocialButton from '../SocialButton';
import { FaGamepad } from 'react-icons/fa';

const ProjectMMMP = {
	id: 'ut-mmmp',
	img: Img,
	label: 'Undertale: Mad Mew Mew Port',
	description: 'Фанатская игра по Undertale для Windows и Android',
	content: <>
		Данная игра является фанатским портом битвы с "Безумной Мяу Мяу" из Undertale на Nintendo Switch<br />
		<br />Год выпуска: 2018<br />
		Статус: Разработка прекращена в 2020 году<br />
		<SocialButton mt="sm" href="https://gamejolt.com/games/undertalemmm/370091" Icon={FaGamepad} text="Открыть в Gamejolt" />
	</>,
}

export default ProjectMMMP