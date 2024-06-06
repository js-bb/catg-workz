'use client';

import Image from 'next/image';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { DialogButton } from '../../glassmorphic/dialog/DialogButton';
import { type Props } from '../../utils/type/Props';
import ic_blog from './ic-blog.svg';
import clsx from 'clsx';
import { CommentsDialogPanel } from './CommentsDialogPanel';

export const CommentsDialogButton = ({
	className,
}: Props.WithClassName<{}>) => {
	return (
		<DialogButton content={<CommentsDialogPanel />}>
			<IconButton
				href='#'
				side='left'
				sideOffset={20}
				title='Comments'
				className={clsx('', className)}
			>
				<Image
					src={ic_blog}
					alt=''
					className='mx-auto h-6'
				/>
			</IconButton>
		</DialogButton>
	);
};
