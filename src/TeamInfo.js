import { Container, Title } from "@mantine/core";
import { DateToMonth, DateDiffer } from './DateCalc';

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
		</Title> | {DateToMonth(dateStart)} - {dateEnd ? DateToMonth(dateEnd) : "по настоящее время"} <Title component="span" order={5} c='dimmed'>({DateDiffer(dateStart, dateEnd)})</Title>
	</Title>
	<Title order={5}>
		{role}
	</Title>
</Container>;

export default TeamInfo;
