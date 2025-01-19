import { createContext, useState } from 'react';
import { Theme, defaultTheme } from '@cicatrizdev/alfabit-tokens';

export const ThemeContext = createContext<{
	theme: Theme | undefined;
	changeTheme: (theme: Theme) => void;
}>({
	theme: undefined,
	changeTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [appTheme, setAppTheme] = useState<Theme | undefined>(defaultTheme);

	return (
		<ThemeContext.Provider value={{ theme: appTheme, changeTheme: setAppTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
