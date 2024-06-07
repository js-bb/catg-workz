import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import Image from 'next/image';
import { EventTimelinePanel } from './EventTimelinePanel';
import graph from './graph.png';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { PanelDescription } from '@/app/lib/glassmorphic/panel/PanelDescription';
import Link from 'next/link';

export const GraphSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<div className={clsx('flex flex-col gap-4', className)}>
			<div className='flex flex-wrap justify-between gap-x-[10%] gap-y-4'>
				<div className='flex flex-shrink flex-grow basis-0 flex-col'>
					<div>
						<PanelTitle>Multiverse Data</PanelTitle>
						<PanelDescription>
							1 April 2024 - 30 April 2024
						</PanelDescription>
					</div>
					<div className='flex flex-grow flex-col justify-center'>
						<div className='flex flex-col gap-5'>
							<div className='flex flex-col gap-2'>
								<div className='h2 uppercase'>Event2Vent2</div>
								<div className='h4'>
									1 April 2024 - 30 April 2024
								</div>
							</div>
							<div className='flex flex-col gap-3'>
								<div className='h-2 w-full rounded-full bg-[#575757]'>
									<div className='h-full w-[65%] rounded-full bg-[#33C558]'></div>
								</div>
								<div className='flex justify-between'>
									<div className='text-fg-1/70'>
										Completion
									</div>
									<div className='text-fg-1/70'>65%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex w-auto flex-shrink flex-grow basis-1/2 items-center justify-end'>
					<Link href='/datum/EVENTZEVT'>
						<Image
							src={graph}
							alt=''
							className='w-full object-contain max-h-lv-[110lvh]'
						/>
					</Link>
				</div>
			</div>
			<EventTimelinePanel />
		</div>
	);
};
