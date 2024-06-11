import type { Metadata } from 'next';
import './lib/theme/globals.css';
import clsx from 'clsx';
import { SF_Pro } from './lib/theme/fonts';
import { type Props } from './lib/utils/type/Props';

export const metadata: Metadata = {
	title: 'CatgWorkz',
	description: '',
};

const RootLayout = ({ children }: Props.WithChildren<{}>) => {
	return (
		<html
			lang='en'
			className={clsx(
				// SF_Pro_Display.variable,
				// SF_Pro_Text.variable,
				SF_Pro.variable,
				// SF_Mono.variable,
			)}
		>
			<body className='font-sans text-base text-fg-1 [scrollbar-gutter:stable]'>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
