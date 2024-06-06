'use client';

import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { type Props } from '../../utils/type/Props';
import { MessagePopupPanel } from './MessagePopupPanel';
import ic_mail from './ic-mail.svg';

export const MessagePopupButton = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<IconButton
					href='#'
					title='Messages'
					className={clsx('', className)}
				>
					<Image
						src={ic_mail}
						alt=''
						className='h-6 w-6'
					/>
				</IconButton>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay
					className='[&[data-state="closed"]]:animate-fade-out [&[data-state="open"]]:animate-fade-in
						fixed inset-0 h-full w-full bg-fg-1/30'
				/>
				<Dialog.Content
					className='group fixed left-1/2 top-1/2 w-full max-w-[380px] -translate-x-1/2
						-translate-y-1/2 rounded'
				>
					<MessagePopupPanel
						className='group-[&[data-state="closed"]]:animate-swipe-out-bottom
							group-[&[data-state="open"]]:animate-swipe-in-bottom'
						heading={
							<>
								<Dialog.Title asChild>
									<div className='h1'>New Message</div>
								</Dialog.Title>
								<Dialog.Close asChild>
									<IconButton
										variant='filled'
										className='!absolute right-[calc(var(--padding)_/_2)] top-[calc(var(--padding)_/_2)]'
									>
										<XIcon size='1em' />
									</IconButton>
								</Dialog.Close>
							</>
						}
					/>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
