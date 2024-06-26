import amanda from '@/app/lib/mock/avatar/amanda.png';
import man from '@/app/lib/mock/avatar/man.png';
import clsx from 'clsx';
import Image from 'next/image';
import { Button } from '../../glassmorphic/button/Button';
import { ChatBubble } from '../../glassmorphic/chat/ChatBubble';
import { DialogPanel } from '../../glassmorphic/dialog/DialogPanel';
import { DialogPanelDescription } from '../../glassmorphic/dialog/DialogPanelDescription';
import { DialogPanelTitle } from '../../glassmorphic/dialog/DialogPanelTitle';
import { Panel } from '../../glassmorphic/panel/Panel';
import { type Props } from '../../utils/type/Props';
import { DialogPanelClose } from '../../glassmorphic/dialog/DialogPanelClose';

export const CommentsDialogPanel = ({ className }: Props.WithClassName<{}>) => {
	return (
		<DialogPanel
			className={clsx(
				`flex h-full max-h-[533px] w-full max-w-[380px] flex-col justify-between gap-6
				p-[--padding]`,
				className,
			)}
		>
			<DialogPanelClose />
			<div className=''>
				<DialogPanelTitle>Comments</DialogPanelTitle>
				<DialogPanelDescription>EVENTZEVT</DialogPanelDescription>
			</div>
			<div className='flex h-full flex-col justify-end gap-6'>
				<div className='w-full text-center text-sm text-fg-2'>
					5 April 2024 3:45 pm
				</div>
				<div className='flex flex-col gap-4'>
					<ChatBubble
						variant='sender'
						className='max-w-40'
						avatar={
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
						avatar={
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
					<Button variant='primary'>Send</Button>
				</div>
			</div>
		</DialogPanel>
	);
};
