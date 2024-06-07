import { type Props } from '@/app/lib/utils/type/Props';
import Image from 'next/image';
import houston from './houston.png';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import clsx from 'clsx';
import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { ExpandIcon, MoreHorizontalIcon, RotateCwIcon } from 'lucide-react';
import amanda from '@/app/lib/mock/profile/amanda.png';
import { ChatBubble } from '@/app/lib/glassmorphic/chat/ChatBubble';

export const HoustonSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel
			className={clsx(
				'flex min-h-[300px] flex-col justify-between p-[--padding]',
				className,
			)}
		>
			<div className='h1 flex justify-between gap-8'>
				<div className='flex items-center gap-2'>
					<div className='flex h-0 flex-shrink-0 items-center'>
						<Image
							src={houston}
							alt=''
							className='h-[1em] w-[1em] rounded-full'
						/>
					</div>
					Houston AI
				</div>
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

			<div className='flex w-full flex-col gap-4'>
				<ChatBubble
					className='max-w-56'
					avatar={
						<Image
							src={amanda}
							alt=''
							className='h-10 w-10 rounded-full border border-white/30 object-cover'
						/>
					}
				>
					Houston, we have a problem! Help me find Teanna’s contact.
				</ChatBubble>
				<Panel
					className='relative flex-grow rounded-full font-medium'
					variant='inset'
				>
					<div className='absolute left-4 top-1/2 -translate-y-1/2'>
						Ask Houston
					</div>
					<input className='h-10 w-full rounded-full bg-transparent' />
					<div className='absolute right-4 top-1/2 -translate-y-1/2'>
						<RotateCwIcon size='1em' />
					</div>
				</Panel>
			</div>
		</Panel>
	);
};
