import { Flex } from '@mantine/core';
import SocialButton from '../SocialButton';
import { FaSteamSymbol, FaGithub } from 'react-icons/fa';

const ProjectGmodPiano = {
	id: 'gmod-piano',
	order: 2,
	label: 'Autoplayble Piano',
	description: 'Аддон для Garry\'s mod',
	content: <>Модифицированная версия аддона <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=104548572">Playable Piano</a>, теперь с <b>Авто-Игрой</b>.<br />
			Зачем заучивать песню, когда робот может сделать всё за тебя?<br />
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
			<iframe width="560" height="315" src="https://www.youtube.com/embed/NKQVByNpnCA?si=hGrxkdqhUTFdt2I8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		</>,
}

export default ProjectGmodPiano