import { Button } from "@mantine/core";

const SocialButton = ({ href, Icon, text }) => <Button 
	component="a"
	href={href}
	target="_blank"
	rel="noopener noreferrer"
	leftSection={<Icon size={14} />}
>
	{text}
</Button>;

export default SocialButton;
