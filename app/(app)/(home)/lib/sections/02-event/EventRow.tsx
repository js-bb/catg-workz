'use client';

import { whenKeypressDoClick } from '@/app/lib/accessibility/whenKeypressDoClick';
import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { Chip } from '@/app/lib/glassmorphic/chip/Chip';
import { tw } from '@/app/lib/utils/tailwind/tw';
import { type Props } from '@/app/lib/utils/type/Props';
import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	EyeIcon,
	FileTextIcon,
	XIcon,
} from 'lucide-react';
import { type ReactElement } from 'react';
import { type EventItem } from './EventItem';
import { EventRowMenuButton } from './EventRowMenuButton';

const statusClassNames = {
	accepted: tw`bg-green-500`,
	deleted: tw``,
	seen: tw`bg-accent-1`,
	register: tw`bg-green-500`,
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
								<Accordion.Content asChild>
									<div
										className='overflow-hidden pr-8 pt-2 group-[&[data-state="closed"]]:animate-accordion-close
											group-[&[data-state="open"]]:animate-accordion-open'
									>
										{item.description}
									</div>
								</Accordion.Content>
							</td>
						) : k === 'status' ? (
							<td key={k}>
								<Chip
									icon={statusIcons[item[k]]}
									className={clsx(
										'',
										statusClassNames[item[k]],
									)}
								>
									{statusStrings[item[k]]}
								</Chip>
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

						<EventRowMenuButton className='ml-1' />
					</td>
				</tr>
			</Accordion.Trigger>
		</Accordion.Item>
	);
};
