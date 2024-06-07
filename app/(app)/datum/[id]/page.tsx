import { Breadcrumb } from '@/app/lib/glassmorphic/breadcrumb/Breadcrumb';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';

export const generateStaticParams = () => [{ id: 'EVENTZEVT' }];

const DatumIdPage = ({ params: { id } }: { params: { id: string } }) => {
	return (
		<Panel className='flex flex-col gap-[--gap] rounded p-[--padding]'>
			<Breadcrumb segments={{ '/': 'Home', '': id }} />
		</Panel>
	);
};

export default DatumIdPage;
