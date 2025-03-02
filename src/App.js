import { Container } from '@mantine/core';

import TitleCard from './TitleCard';
import SocialCard from './SocialCard';
import ProjectsCard from './ProjectsCard';
import TeamsCard from './TeamsCard';
// import SkillsCard from './SkillsCard';

const App = () => (
  <Container>
	<TitleCard />
	<SocialCard />
	{/* <SkillsCard /> */}
	<ProjectsCard />
	<TeamsCard />
  </Container>
);

export default App;
