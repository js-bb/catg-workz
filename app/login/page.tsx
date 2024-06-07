'use client';

import { AmbientBackground } from '../lib/mock/background/AmbientBackground';
import { Panel } from '../lib/glassmorphic/panel/Panel';
import WelcomeBack from './lib/sections/01-welcome/WelcomeBack';
import Form from './lib/sections/02-form/Form';

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-44'>
			<AmbientBackground className='items-center justify-center' />
			<Panel
				className='flex w-[472px] flex-grow basis-[auto] flex-col flex-wrap items-center
					justify-center'
			>
				<WelcomeBack />
				<Form />
			</Panel>
		</div>
	);
};

export default Login;
