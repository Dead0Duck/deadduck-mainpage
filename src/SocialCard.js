import Card from './Card.js';
import { Title, Flex, Space } from '@mantine/core';
import { FaVk, FaTelegramPlane, FaDiscord, FaYoutube, FaSteamSymbol, FaGithub } from 'react-icons/fa';

import SocialButton from './SocialButton.js';

const SocialCard = () => (
	<Card>
		<Title order={3} mb={10}>Связаться со мной</Title>

		<Flex
			gap="md"
			justify="center"
			align="center"
			direction="row"
			wrap="wrap"
			mb="sm"
		>
			<SocialButton href="https://t.me/Dead0Duck" Icon={FaTelegramPlane} text="Telegram" />
			<SocialButton href="https://discord.com/users/272630656486604800" Icon={FaDiscord} text="Discord" />
			<SocialButton href="https://vk.com/dead0duck" Icon={FaVk} text="ВКонтакте" />

			<SocialButton href="https://youtube.com/@Dead0Duck" Icon={FaYoutube} text="YouTube" />
			<SocialButton href="https://steamcommunity.com/id/Dead0Duck" Icon={FaSteamSymbol} text="Steam" />
			<SocialButton href="https://github.com/Dead0Duck" Icon={FaGithub} text="Github" />
		</Flex>
		<Space h={2} />
	</Card>
);

export default SocialCard;
