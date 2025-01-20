/* eslint-disable import/no-unresolved */
import { Button } from '@cicatrizdev/alfabit-button';
import { darkTheme, lightTheme } from '@cicatrizdev/alfabit-tokens';
import type { MetaFunction } from '@remix-run/node';
import { useContext } from 'react';
import { customTheme } from '~/config/themes';
import { ThemeContext } from '~/context/themeContext';

export const meta: MetaFunction = () => {
	return [{ title: 'Alfabit Demo' }, { name: 'description', content: '' }];
};

export default function Index() {
	const { theme, changeTheme } = useContext(ThemeContext);

	const buttonText = `Trocar para o tema ${theme === lightTheme || !theme ? 'dark' : 'light'}`;

	return (
		<div
			className='flex h-screen items-center justify-center'
			style={{ backgroundColor: theme?.colors.background }}
		>
			<div className='flex flex-col items-center gap-16'>
				<header className='flex flex-col items-center gap-9'>
					<h1 className='leading text-2xl font-bold' style={{ color: theme?.colors.text }}>
						Bem-vindo ao Design System Alfabit
					</h1>
				</header>
				<Button theme={theme}>Hello World, Alfabit npm!</Button>
				<Button
					variant='secondary'
					onClick={() => changeTheme(theme === lightTheme || !theme ? darkTheme : lightTheme)}
				>
					{buttonText}
				</Button>
				<Button variant='secondary' onClick={() => changeTheme(customTheme)}>
					Trocar para o tema customizado
				</Button>
			</div>
		</div>
	);
}
