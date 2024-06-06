'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { Panel } from '../../glassmorphic/panel/Panel';
import { type Props } from '../../utils/type/Props';
import Image from 'next/image';
import ic_mail from './ic-mail.svg';
import clsx from 'clsx';
import { MessagePopupPanel } from './MessagePopupPanel';

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
				<Dialog.Overlay />
				<Dialog.Content
					className='group fixed left-1/2 top-1/2 w-full max-w-screen-sm -translate-x-1/2
						-translate-y-1/2 p-[--padding]'
				>
					<MessagePopupPanel
						className='group-[&[data-state="closed"]]:animate-swipe-out-bottom
							group-[&[data-state="open"]]:animate-swipe-in-bottom'
						heading={
							<>
								<Dialog.Title asChild>
									<div className='h1'>New Message</div>
								</Dialog.Title>
								<Dialog.Close />
							</>
						}
					/>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
