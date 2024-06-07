import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import { ExpandIcon, MoreHorizontalIcon } from 'lucide-react';
import graph from './graph.svg';
import Image from 'next/image';

export const MetaverseSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('flex flex-col gap-4 p-[--padding]', className)}>
			<div className='relative flex flex-col gap-2'>
				<div className='h1 flex justify-between gap-8'>
					Metaverse
					<div className='flex h-0 gap-1'>
						<IconButton
							variant='filled'
							title='Expand'
						>
							<ExpandIcon size='1rem' />
						</IconButton>
						<IconButton
							variant='filled'
							title='More'
						>
							<MoreHorizontalIcon size='1rem' />
						</IconButton>
					</div>
				</div>
				<div className='h4'>Insert description here</div>
			</div>
			<Image
				src={graph}
				alt=''
				className='h-0 w-full flex-shrink-0 flex-grow object-contain'
			/>
		</Panel>
	);
};
