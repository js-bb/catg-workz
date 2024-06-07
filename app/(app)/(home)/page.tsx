import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { GraphSection } from './lib/sections/01-graph/GraphSection';
import { EventSection } from './lib/sections/02-event/EventSection';
import { MetaverseSection } from './lib/sections/03-metaverse/MetaverseSection';
import { HoustonSection } from './lib/sections/04-houston/HoustonSection';

const HomePage = () => {
	return (
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
	);
};

export default HomePage;
