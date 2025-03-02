import { Container } from '@mantine/core';

const demoProps = {
    bg: 'var(--mantine-color-cyan-light)',
    mih: 50,
    mt: 'md',
	pt: 'xs',
	pb: 'xs',
};

const Card = (props) => (
	<Container {...demoProps} {...props.settings}>{props.children}</Container>
);

export default Card;
