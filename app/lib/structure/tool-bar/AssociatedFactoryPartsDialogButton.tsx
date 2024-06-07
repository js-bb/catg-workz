'use client';

import Image from 'next/image';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { DialogButton } from '../../glassmorphic/dialog/DialogButton';
import { type Props } from '../../utils/type/Props';
import ic_command_chain from './ic-command-chain.svg';
import clsx from 'clsx';
import { AssociatedFactoryPartsDialogPanel } from './AssociatedFactoryPartsDialogPanel';

export const AssociatedFactoryPartsDialogButton = ({
	className,
}: Props.WithClassName<{}>) => {
	return (
		<DialogButton content={<AssociatedFactoryPartsDialogPanel />}>
			<IconButton
				side='left'
				sideOffset={20}
				title='Associated Factory Parts'
				className={clsx('', className)}
			>
				<Image
					src={ic_command_chain}
					alt=''
					className='mx-auto h-6'
				/>
			</IconButton>
		</DialogButton>
	);
};
