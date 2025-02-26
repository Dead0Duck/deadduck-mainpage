import { Container, Title } from "@mantine/core";

const TeamInfo = ({ title, dateStart, dateEnd, role, href }) => <Container mb="sm">
	<Title order={4}>
		<Title
			order={4}
			component="a"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{title}
		</Title> | {dateStart} - {dateEnd}
	</Title>
	<Title order={5}>
		{role}
	</Title>
</Container>;

export default TeamInfo;
