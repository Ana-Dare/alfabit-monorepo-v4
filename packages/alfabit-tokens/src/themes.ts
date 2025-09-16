import { background, blue, gray, green, red, yellow } from "./colors";

export interface ITheme {
  colors: Icolors;
}

interface Icolors { 
  background: string;
  primary: string;
  text: string;
  secondary: string;
  success: string;
  error: string;
  warning: string;
  black: string;
  white: string;
}

const commonColors = {
  black: gray.black,
  white: gray.white,
};

export const lightTheme: ITheme = {
  colors: {
    ...commonColors,
    background: background.light,
    primary: blue.primary,
    text: gray.primary,
    secondary: gray.secondary,
    success: green.primary,
    error: red.primary,
    warning: yellow.primary,
  },
};

export const darkTheme: ITheme = {
  colors: {
    ...commonColors,
    background: gray.primary,
    text: gray.white,
    primary: blue.tertiary,
    secondary: gray.tertiary,
    success: green.primary,
    error: red.primary,
    warning: yellow.primary,
  },
};

export const defaultTheme: ITheme = lightTheme;

// Funçaõ alternar entre temas (desfaio)
function toggleTheme(currentTheme: ITheme): ITheme {
  return currentTheme === lightTheme ? darkTheme : lightTheme;
}

let currentheme = lightTheme;
console.log("Tema atual", currentheme);
currentheme = toggleTheme(currentheme);
console.log("Tema alternado", currentheme);
