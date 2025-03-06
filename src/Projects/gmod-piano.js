import Img from './imgs/gmod-piano.avif';
import { Flex } from '@mantine/core';
import SocialButton from '../SocialButton';
import { FaSteamSymbol, FaGithub } from 'react-icons/fa';
import YtEmbed from '../YtEmbed';

const ProjectGmodPiano = {
	id: 'gmod-piano',
	img: Img,
	label: 'Autoplayble Piano',
	description: 'Аддон для Garry\'s mod',
	content: <>
		Модифицированная версия аддона <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=104548572">Playable Piano</a>, теперь с <b>Авто-Игрой</b>.<br />
		Зачем заучивать песню, когда робот может сделать всё за тебя?<br />
		<br />Год выпуска: 2025<br />
		Статус: Поддерживается<br />
		<Flex
			gap="md"
			direction="row"
			wrap="wrap"
			mt="sm"
		>
			<SocialButton href="https://steamcommunity.com/sharedfiles/filedetails/?id=3325497170" Icon={FaSteamSymbol} text="Открыть в Steam" />
			<SocialButton href="https://github.com/Dead0Duck/Autoplayable_Piano" Icon={FaGithub} text="Открыть в Github" /><br />
		</Flex>
		<br />
		<YtEmbed src='https://www.youtube.com/embed/NKQVByNpnCA' />
	</>,
}

export default ProjectGmodPiano