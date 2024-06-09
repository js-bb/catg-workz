import { Chip } from '@/app/lib/glassmorphic/chip/Chip';
import { PanelDescription } from '@/app/lib/glassmorphic/panel/PanelDescription';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import { PencilIcon } from 'lucide-react';

export const InfoSection = ({
	className,
	name,
}: Props.WithClassName<{ name: string }>) => {
	return (
		<div className={clsx('flex max-w-[300px] flex-col', className)}>
			<div className='flex flex-col gap-4 py-[--padding]'>
				<div className=''>
					<PanelTitle className='flex items-center gap-2'>
						{name}
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
						<Chip
							variant='ok'
							className='w-max'
						>
							Special Meeting
						</Chip>
						<Chip
							variant='ok'
							className='w-max'
						>
							Quarterly
						</Chip>
					</div>
				</div>
				<div className=''>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</div>
				<div className='flex flex-col gap-2'>
					<div className='h3 text-fg-1'>Limits</div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</div>
			</div>
		</div>
	);
};
