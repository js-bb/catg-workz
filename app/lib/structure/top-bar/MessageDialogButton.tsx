'use client';

import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { XIcon } from 'lucide-react';
import Image from 'next/image';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { type Props } from '../../utils/type/Props';
import { MessageDialogPanel } from './MessageDialogPanel';
import ic_mail from './ic-mail.svg';
import { DialogButton } from '../../glassmorphic/dialog/DialogButton';

export const MessageDialogButton = ({ className }: Props.WithClassName<{}>) => {
	return (
		<DialogButton content={<MessageDialogPanel />}>
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
		</DialogButton>
	);
};
