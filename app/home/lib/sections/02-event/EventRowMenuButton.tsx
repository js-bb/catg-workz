'use client';

import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { type Props } from '@/app/lib/utils/type/Props';
import * as Popover from '@radix-ui/react-popover';
import { MoreVerticalIcon } from 'lucide-react';
import { EventRowMenuPanel } from './EventRowMenuPanel';
import clsx from 'clsx';

export const EventRowMenuButton = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Popover.Root>
			<Popover.Trigger asChild>
				<IconButton
					title='Menu'
					className={clsx('', className)}
					sideOffset={15}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className='flex w-2 justify-center'>
						<MoreVerticalIcon
							size='1rem'
							className='flex-shrink-0'
						/>
					</div>
				</IconButton>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content
					side='top'
					sideOffset={10}
					onOpenAutoFocus={(e) => {
						e.preventDefault();
					}}
					className='[&[data-state="closed"][data-side="bottom"]]:animate-swipe-out-top
						[&[data-state="closed"][data-side="left"]]:animate-swipe-out-right
						[&[data-state="closed"][data-side="right"]]:animate-swipe-out-left
						[&[data-state="closed"][data-side="top"]]:animate-swipe-out-bottom
						[&[data-state="open"][data-side="bottom"]]:animate-swipe-in-top
						[&[data-state="open"][data-side="left"]]:animate-swipe-in-right
						[&[data-state="open"][data-side="right"]]:animate-swipe-in-left
						[&[data-state="open"][data-side="top"]]:animate-swipe-in-bottom'
				>
					<EventRowMenuPanel className='' />
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	);
};
