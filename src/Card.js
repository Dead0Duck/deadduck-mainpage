import { Container } from '@mantine/core';

const demoProps = {
    bg: 'var(--mantine-color-cyan-light)',
    mih: 50,
    mt: 'md',
};

const Card = (props) => (
	<Container {...demoProps}>{props.children}</Container>
);

export default Card;
