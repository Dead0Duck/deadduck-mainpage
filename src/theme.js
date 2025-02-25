import {
	createTheme,
	DEFAULT_THEME,
	mergeMantineTheme,
  } from '@mantine/core';
  
const themeOverride = createTheme({
	primaryColor: 'cyan',
	// defaultRadius: 0,
});
  
export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);