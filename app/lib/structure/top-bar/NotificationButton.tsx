'use client';

import Image from 'next/image';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { type Props } from '../../utils/type/Props';
import ic_bell from './ic-bell.svg';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

export const NotificationButton = ({ className }: Props.WithClassName<{}>) => {
	const [important, setImportant] = useState(true);

	return (
		<IconButton
			title='Notifications'
			className={clsx('relative', className)}
			onClick={useCallback(() => {
				setImportant(false);
			}, [])}
		>
			<Image
				src={ic_bell}
				alt=''
				className='h-6 w-6'
			/>
			{important && (
				<div className='absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#EA333E]' />
			)}
		</IconButton>
	);
};
