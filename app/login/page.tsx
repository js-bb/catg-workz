import { AmbientBackground } from '../lib/mock/background/AmbientBackground';
import { Panel } from '../lib/glassmorphic/panel/Panel';
import WelcomeBack from './lib/sections/01-welcome/WelcomeBack';

const Login = () => {
	return (
		<>
			<AmbientBackground />
			<Panel className='flex flex-grow basis-[400px] flex-wrap gap-[--gap]'>
				<WelcomeBack />
			</Panel>
		</>
	);
};

export default Login;
