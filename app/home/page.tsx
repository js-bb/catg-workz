// TODO: don't make the whole route a client component
// write our own alternative to radix's Tooltip that doesn't use
// React.context
'use client';

import { Panel } from '../lib/glassmorphic/panel/Panel';
import { AmbientBackground } from '../lib/mock/background/AmbientBackground';
import { ToolBar } from '../lib/structure/tool-bar/ToolBar';
import { TopBar } from '../lib/structure/top-bar/TopBar';
import { GraphSection } from './lib/sections/01-graph/GraphSection';
import { EventSection } from './lib/sections/02-event/EventSection';
import { MetaverseSection } from './lib/sections/03-metaverse/MetaverseSection';
import { HoustonSection } from './lib/sections/04-houston/HoustonSection';
import * as Tooltip from '@radix-ui/react-tooltip';

const Home = () => {
	return (
		<Tooltip.Provider delayDuration={0}>
			<AmbientBackground />
			<div
				className='relative flex gap-[--gap] p-[--padding]'
				style={{
					'--gap': 'calc(var(--padding) / 2)',
				}}
			>
				<div className='flex min-h-lvh w-full min-w-0 flex-col gap-[--gap]'>
					<TopBar />
					<Panel className='flex flex-col gap-[--gap] rounded rounded-b-2xl p-[--padding]'>
						<GraphSection />
						<div className='flex w-full flex-wrap gap-[--gap]'>
							<EventSection className='flex-shrink flex-grow' />
							<div className='flex flex-grow basis-[200px] flex-wrap gap-[--gap]'>
								<MetaverseSection className='flex-grow' />
								<HoustonSection className='flex-grow' />
							</div>
						</div>
					</Panel>
				</div>
				<div className='relative'>
					<div className='h-1/5'></div>
					<ToolBar className='sticky top-[--padding]' />
				</div>
			</div>
		</Tooltip.Provider>
	);
};

export default Home;
