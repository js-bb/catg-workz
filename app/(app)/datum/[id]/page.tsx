import { Breadcrumb } from '@/app/lib/glassmorphic/breadcrumb/Breadcrumb';
import { Chip } from '@/app/lib/glassmorphic/chip/Chip';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { PanelDescription } from '@/app/lib/glassmorphic/panel/PanelDescription';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { PencilIcon } from 'lucide-react';

export const generateStaticParams = () => [{ id: 'EVENTZEVT' }];

const DatumIdPage = ({ params: { id } }: { params: { id: string } }) => {
	return (
		<Panel className='flex h-full flex-col gap-[--gap] rounded p-[--padding]'>
			<Breadcrumb segments={{ '/': 'Home', '': id }} />
			<div className='flex h-full w-full max-w-[300px] flex-col'>
				<div className='flex flex-col gap-4 py-[--padding]'>
					<div className=''>
						<PanelTitle className='flex items-center gap-2'>
							{id}
							<PencilIcon
								className='inline'
								size='0.7em'
							/>
						</PanelTitle>
						<PanelDescription>
							21 June 2024 2:00 pm - 21 June 2024 4:00 pm
						</PanelDescription>
					</div>
					<div className='flex gap-2'>
						<Chip variant='ok'>Accepted</Chip>
						<Chip variant='error'>Urgent</Chip>
					</div>
				</div>
				<div className='flex h-full flex-col justify-between gap-6 py-[--padding]'>
					<div className='flex items-center gap-2'>
						Description
						<div className='flex gap-2'>
							<Chip variant='ok'>Special Meeting</Chip>
							<Chip variant='ok'>Quarterly</Chip>
						</div>
					</div>
					<div className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</div>
					<div className='flex flex-col gap-2'>
						<div className='h3 text-fg-1'>Limits</div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</div>
				</div>
			</div>
		</Panel>
	);
};

export default DatumIdPage;
