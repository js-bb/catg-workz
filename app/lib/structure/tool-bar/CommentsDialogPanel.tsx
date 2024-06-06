import clsx from 'clsx';
import { Panel } from '../../glassmorphic/panel/Panel';
import { type Props } from '../../utils/type/Props';
import { DialogTitle } from '../../glassmorphic/dialog/DialogTitle';
import { DialogDescription } from '../../glassmorphic/dialog/DialogDescription';
import man from '@/app/lib/mock/profile/man.png';
import amanda from '@/app/lib/mock/profile/amanda.png';
import { ChatBubble } from '../../glassmorphic/chat/ChatBubble';
import Image from 'next/image';
import { Ripple } from '../../glassmorphic/button/Ripple';

export const CommentsDialogPanel = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel
			className={clsx(
				`flex h-full max-h-[533px] w-full max-w-[380px] flex-col justify-between gap-6
				p-[--padding] group-[[data-state="closed"]]:animate-swipe-out-bottom
				group-[[data-state="open"]]:animate-swipe-in-bottom`,
				className,
			)}
		>
			<div className=''>
				<DialogTitle>Comments</DialogTitle>
				<DialogDescription>EVENTZEVT</DialogDescription>
			</div>
			<div className='flex h-full flex-col justify-end gap-6'>
				<div className='w-full text-center text-sm text-fg-2'>
					5 April 2024 3:45 pm
				</div>
				<div className='flex flex-col gap-4'>
					<ChatBubble
						variant='sender'
						className='max-w-40'
						profile={
							<Image
								src={man}
								alt=''
								className='h-10 w-10 rounded-full border border-white/30 object-cover'
							/>
						}
					>
						Can't wait to see the amazing results of the marketing
						event after that productive meeting!
					</ChatBubble>
					<ChatBubble
						variant='receiver'
						className='max-w-40'
						profile={
							<Image
								src={amanda}
								alt=''
								className='h-10 w-10 rounded-full border border-white/30 object-cover'
							/>
						}
					>
						I agree, good work on the presentation Andrea!
					</ChatBubble>
				</div>
				<Panel
					variant='inset'
					className='rounded-full'
				>
					<input
						id='message-subject'
						type='text'
						placeholder='Write a comment...'
						className='h-10 w-full rounded-full bg-transparent px-4'
					/>
				</Panel>
				<div className='flex w-full justify-center'>
					<button
						className='relative h-10 w-full max-w-[111px] rounded-full border border-fg-1/0
							bg-[#0181FC] text-md transition-all ease-out hover:brightness-105
							active:border-fg-1/30 active:brightness-110'
					>
						<Ripple className='absolute inset-0 rounded-full' />
						Send
					</button>
				</div>
			</div>
		</Panel>
	);
};
