import { Button } from "@mantine/core";

const SocialButton = ({ href, Icon, text, mt }) => <Button 
	component="a"
	href={href}
	target="_blank"
	rel="noopener noreferrer"
	mt={mt}
	leftSection={<Icon size={14} />}
	variant="outline"
>
	{text}
</Button>;

export default SocialButton;
