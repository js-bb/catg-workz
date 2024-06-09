import { Breadcrumb } from '@/app/lib/glassmorphic/breadcrumb/Breadcrumb';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { InfoSection } from './lib/sections/01-info/InfoSection';
import { VisualizationSection } from './lib/sections/02-visualization/VisualizationSection';
import { TeamSection } from './lib/sections/03-team/TeamSection';
import { AttachmentsSection } from './lib/sections/04-attachments/AttachmentsSection';
import { ReturnsSection } from './lib/sections/05-returns/ReturnsSection';
import { AssociatedRequestsSection } from './lib/sections/06-associated-requests/AssociatedRequestsSection';
import { TransmittalDocumentsSection } from './lib/sections/07-trasmittal-documents/TransmittalDocumentsSection';

export const generateStaticParams = () => [{ id: 'EVENTZEVT' }];

const DatumIdPage = ({ params: { id } }: { params: { id: string } }) => {
	return (
		<Panel className='flex h-full flex-col gap-[--gap] rounded rounded-b-2xl p-[--padding]'>
			<Breadcrumb segments={{ '/': 'Home', '': id }} />
			<div className='flex h-full flex-wrap gap-[--gap]'>
				<InfoSection
					name={id}
					className='min-h-lv-[60vh]'
				/>
				<VisualizationSection className='w-1/3 flex-shrink flex-grow self-center p-8 h-lv-[50vh]' />
				<TeamSection className='self-end' />
				<AttachmentsSection className='flex-grow basis-0' />
				<ReturnsSection className='flex-grow basis-1/2' />
				<AssociatedRequestsSection className='flex-grow basis-1/2' />
				<TransmittalDocumentsSection className='flex-grow basis-0' />
			</div>
		</Panel>
	);
};

export default DatumIdPage;
