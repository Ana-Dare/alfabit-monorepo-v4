import { Button } from '@cicatrizdev/alfabit-button';
import { darkTheme, lightTheme } from '@cicatrizdev/alfabit-tokens';
import type { MetaFunction } from '@remix-run/node';
import { useContext } from 'react';
// eslint-disable-next-line import/no-unresolved
import { ThemeContext } from '~/context/themeContext';

export const meta: MetaFunction = () => {
	return [{ title: 'Alfabit Demo' }, { name: 'description', content: '' }];
};

export default function Index() {
	const { theme, changeTheme } = useContext(ThemeContext);
	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='flex flex-col items-center gap-16'>
				<header className='flex flex-col items-center gap-9'>
					<h1 className='leading text-2xl font-bold text-gray-800 dark:text-gray-100'>
						Bem-vindo ao Design System Alfabit
					</h1>
				</header>
				<Button theme={theme}>Hello World, Alfabit npm!</Button>
				<Button
					variant='secondary'
					onClick={() => changeTheme(theme === lightTheme || !theme ? darkTheme : lightTheme)}
				>
					Trocar o tema
				</Button>
			</div>
		</div>
	);
}
