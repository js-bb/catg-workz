// TODO: don't make the whole route a client component
// write our own alternative to radix's Tooltip that doesn't use
// React.context
'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import { AmbientBackground } from '../lib/mock/background/AmbientBackground';
import { ToolBar } from '../lib/structure/tool-bar/ToolBar';
import { TopBar } from '../lib/structure/top-bar/TopBar';

import { type Props } from '../lib/utils/type/Props';

const AppLayout = ({ children }: Props.WithChildren<{}>) => {
	return (
		<>
			<AmbientBackground />
			<Tooltip.Provider delayDuration={0}>
				<div className='relative flex min-h-lvh gap-[--gap] p-[--padding]'>
					<div className='flex w-full min-w-0 flex-col gap-[--gap]'>
						<TopBar />
						{children}
					</div>
					<div className='relative'>
						<div className='h-1/5'></div>
						<ToolBar className='sticky top-[--padding]' />
					</div>
				</div>
			</Tooltip.Provider>
		</>
	);
};

export default AppLayout;
