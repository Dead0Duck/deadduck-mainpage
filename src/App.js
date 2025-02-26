import { Container } from '@mantine/core';

import TitleCard from './TitleCard';
import SocialCard from './SocialCard';
import ProjectsCard from './ProjectsCard';
import TeamsCard from './TeamsCard';

const App = () => (
  <Container>
	<TitleCard />
	<SocialCard />
	<ProjectsCard />
	<TeamsCard />
  </Container>
);

export default App;
