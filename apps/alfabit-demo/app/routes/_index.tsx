import { Button } from '@cicatrizdev/alfabit-button';
import { darkTheme, lightTheme, Theme } from '@cicatrizdev/alfabit-tokens';
import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';

export const meta: MetaFunction = () => {
	return [{ title: 'Alfabit Demo' }, { name: 'description', content: '' }];
};

export default function Index() {
	const [appTheme, setAppTheme] = useState<Theme | undefined>(undefined);
	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='flex flex-col items-center gap-16'>
				<header className='flex flex-col items-center gap-9'>
					<h1 className='leading text-2xl font-bold text-gray-800 dark:text-gray-100'>
						Bem-vindo ao Design System Alfabit
					</h1>
				</header>
				<Button theme={appTheme}>Hello World, Alfabit npm!</Button>
				<Button
					variant='secondary'
					onClick={() => setAppTheme(appTheme === lightTheme || !appTheme ? darkTheme : lightTheme)}
				>
					Trocar o tema
				</Button>
			</div>
		</div>
	);
}
