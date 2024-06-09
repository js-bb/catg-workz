import { AmbientBackground } from '../lib/mock/background/AmbientBackground';
import { type Props } from '../lib/utils/type/Props';

const AuthLayout = ({ children }: Props.WithChildren<{}>) => {
	return (
		<>
			<AmbientBackground />
			{children}
		</>
	);
};

export default AuthLayout;
