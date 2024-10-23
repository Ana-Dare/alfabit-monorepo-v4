import { Button } from '@cicatrizdev/alfabit-button';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
	return [{ title: 'Alfabit Demo' }, { name: 'description', content: '' }];
};

export default function Index() {
	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='flex flex-col items-center gap-16'>
				<header className='flex flex-col items-center gap-9'>
					<h1 className='leading text-2xl font-bold text-gray-800 dark:text-gray-100'>
						Bem-vindo ao Design System Alfabit
					</h1>
				</header>
				<Button>Hello World, Alfabit npm!</Button>
			</div>
		</div>
	);
}
