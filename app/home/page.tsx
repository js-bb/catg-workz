import Image from 'next/image';
import { AmbientBackground } from '../lib/mock/background/AmbientBackground';
import { LogoType } from '../lib/brand/logo/LogoType';
import {
	BellIcon,
	HistoryIcon,
	MailIcon,
	PencilIcon,
	PlusIcon,
	RotateCwIcon,
} from 'lucide-react';
import { Panel } from '../lib/glassmorphic/panel/Panel';
import { TopBar } from '../lib/structure/top-bar/TopBar';
import { Picker } from '../lib/glassmorphic/picker/Picker';
import { Ripple } from '../lib/glassmorphic/button/Ripple';
import { IconButton } from '../lib/glassmorphic/button/IconButton';
import graph from './graph.png';
import { ToolBar } from '../lib/structure/tool-bar/ToolBar';
import { GraphSection } from './lib/sections/01-graph/GraphSection';
import { EventSection } from './lib/sections/02-event/EventSection';
import { MetaverseSection } from './lib/sections/03-metaverse/MetaverseSection';
import { HoustonSection } from './lib/sections/04-houston/HoustonSection';

export default function Home() {
	return (
		<>
			<AmbientBackground />
			<div
				className='relative flex gap-[--gap] p-[--padding]'
				style={{
					'--gap': 'calc(var(--padding) / 2)',
				}}
			>
				<div className='flex min-h-lvh w-full flex-col gap-[--gap]'>
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
		</>
	);
}
