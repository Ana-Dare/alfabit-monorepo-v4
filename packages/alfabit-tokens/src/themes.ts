import { background, blue, gray, green, red, yellow } from './colors';

const commonColors = {
	black: '#000000',
	white: '#FFFFFF',
};

export const lightTheme = {
	colors: {
		...commonColors,
		background: background.light,
		text: gray.primary,
		primary: blue.primary,
		secondary: gray.secondary,
		success: green.primary,
		error: red.primary,
		warning: yellow.primary,
	},
};

export const darkTheme = {};
