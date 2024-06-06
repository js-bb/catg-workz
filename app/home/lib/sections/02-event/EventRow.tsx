'use client';

import { type Props } from '@/app/lib/utils/type/Props';
import { type EventItem } from './EventItem';
import { whenKeypressDoClick } from '@/app/lib/accessibility/whenKeypressDoClick';
import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import * as Accordion from '@radix-ui/react-accordion';
import {
	FileTextIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	MoreVerticalIcon,
	CheckIcon,
	EyeIcon,
	XIcon,
} from 'lucide-react';
import { useState, type ReactElement } from 'react';
import { EventRowMenu } from './EventRowMenu';
import * as Popover from '@radix-ui/react-popover';

const statusColors = {
	accepted: '#34C759',
	deleted: '#02020228',
	seen: '#0181FC',
	register: '#34C759',
} as const satisfies Record<EventItem['status'], string>;
const statusIcons = {
	accepted: <CheckIcon size='1em' />,
	deleted: <XIcon size='1em' />,
	seen: <EyeIcon size='1em' />,
	register: <CheckIcon size='1em' />,
} as const satisfies Record<EventItem['status'], ReactElement>;
const statusStrings = {
	accepted: 'Accepted',
	deleted: 'Deleted',
	seen: 'Seen',
	register: 'Register',
} as const satisfies Record<EventItem['status'], string>;

export const EventRow = ({
	id,
	columns,
	...item
}: Props.WithClassName<{ id: string; columns: string[] } & EventItem>) => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<Accordion.Item
			value={id}
			asChild
		>
			<Accordion.Trigger
				asChild
				className='group'
			>
				<tr
					className='cursor-pointer rounded-sm'
					role='button'
					tabIndex={0}
					{...whenKeypressDoClick}
				>
					{columns.map((k) =>
						k === 'domain' ? (
							<td
								key={k}
								className='relative w-full'
							>
								<div className='flex w-full items-center justify-between gap-2 font-display text-lg font-bold'>
									{item[k]}
								</div>
								<div className='overflow-hidden'>
									<Accordion.Content
										className='pr-8 pt-2 [&[data-state="closed"]]:animate-accordion-close
											[&[data-state="open"]]:animate-accordion-open'
									>
										{item.description}
									</Accordion.Content>
								</div>
							</td>
						) : k === 'status' ? (
							<td key={k}>
								<div
									className='flex w-max items-center gap-[0.125rem] rounded-full bg-[--color] px-3 py-1.5'
									style={{
										'--color': statusColors[item[k]],
									}}
								>
									{statusIcons[item[k]]}
									<span className='inline-block'>
										{statusStrings[item[k]]}
									</span>
								</div>
							</td>
						) : (
							<td
								key={k}
								className='whitespace-nowrap'
							>
								{item[k as keyof typeof item]}
							</td>
						),
					)}
					<td className='flex items-center gap-2'>
						<IconButton
							variant='filled'
							title='Read More'
							className='!bg-[#0181FC]'
						>
							<FileTextIcon size='1rem' />
						</IconButton>
						<IconButton
							variant='filled'
							className='group-[[data-state="open"]]:hidden'
							title='Expand'
						>
							<ChevronDownIcon size='1rem' />
						</IconButton>
						<IconButton
							variant='filled'
							className='group-[[data-state="closed"]]:hidden'
							title='Collapse'
						>
							<ChevronUpIcon size='1rem' />
						</IconButton>

						<Popover.Root>
							<Popover.Trigger asChild>
								<IconButton
									title='Menu'
									className='ml-1'
									sideOffset={15}
									onClick={(e) => {
										e.stopPropagation();
										setMenuOpen(!menuOpen);
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
									<EventRowMenu className='' />
								</Popover.Content>
							</Popover.Portal>
						</Popover.Root>
					</td>
				</tr>
			</Accordion.Trigger>
		</Accordion.Item>
	);
};
