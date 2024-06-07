import { AmbientBackground } from '../lib/mock/background/AmbientBackground';
import { Panel } from '../lib/glassmorphic/panel/Panel';
import SentText from './lib/sections/01-sent/SentText';
import Verification from './lib/sections/02-verification/Verification';

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-44'>
			<AmbientBackground className='items-center justify-center' />
			<Panel
				className='flex w-[472px] flex-grow basis-[auto] flex-col flex-wrap items-center
					justify-center'
			>
				<SentText />
				<Verification />
			</Panel>
		</div>
	);
};

export default Login;
