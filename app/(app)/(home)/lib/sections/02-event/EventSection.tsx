'use client';

import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { Chip } from '@/app/lib/glassmorphic/chip/Chip';
import { DataTable } from '@/app/lib/glassmorphic/data-table/DataTable';
import { DataTableCell } from '@/app/lib/glassmorphic/data-table/DataTableCell';
import { DataTableHeaderRow } from '@/app/lib/glassmorphic/data-table/DataTableHeaderRow';
import { DataTableRow } from '@/app/lib/glassmorphic/data-table/DataTableRow';
import { DataTableRowExpandButton } from '@/app/lib/glassmorphic/data-table/DataTableRowExpandButton';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { PanelDescription } from '@/app/lib/glassmorphic/panel/PanelDescription';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import {
	CheckIcon,
	EyeIcon,
	FileTextIcon,
	PencilIcon,
	XIcon,
} from 'lucide-react';
import { type ReactNode } from 'react';
import { EventRowMenuButton } from './EventRowMenuButton';

type EventItem = {
	domain: string;
	date: string;
	title: string;
	duration: string;
	status: 'accepted' | 'deleted' | 'seen' | 'register';
	description: string;
};

const items = [
	{
		domain: 'Board',
		date: '21 April 2024 2:00 pm',
		title: 'Quarterly Meeting',
		duration: '1 hr 3 min',
		status: 'accepted',
		description:
			'Onboarding meeting to help new hires understand professional expectations.',
	},
	{
		domain: 'Board',
		date: '26 April 2024 4:00 pm',
		title: 'Special Meeting',
		duration: '40 min',
		status: 'deleted',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'register',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'seen',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'seen',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'register',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'deleted',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'seen',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'accepted',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		domain: 'GBC Member',
		date: '30 April 2024 12:00 pm',
		title: 'Marketplace Test',
		duration: '1 hr 3 min',
		status: 'register',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
] as const satisfies EventItem[];

const statusChips = {
	accepted: (
		<Chip
			variant='ok'
			icon={<CheckIcon />}
		>
			Accepted
		</Chip>
	),
	deleted: (
		<Chip
			variant='default'
			icon={<XIcon />}
		>
			Deleted
		</Chip>
	),
	seen: (
		<Chip
			variant='primary'
			icon={<EyeIcon />}
		>
			Seen
		</Chip>
	),
	register: (
		<Chip
			variant='ok'
			icon={<CheckIcon />}
		>
			Register
		</Chip>
	),
} as const satisfies Record<EventItem['status'], ReactNode>;

export const EventSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel
			className={clsx(
				'flex w-full basis-[970px] flex-col gap-10 p-[--padding]',
				className,
			)}
		>
			<div className=''>
				<PanelTitle className='flex items-center gap-2'>
					Event
					<PencilIcon
						className='inline'
						size='0.7em'
					/>
				</PanelTitle>
				<PanelDescription>
					1 April 2024 - 30 April 2024
				</PanelDescription>
			</div>
			<DataTable
				header={
					<DataTableHeaderRow
						columns={[
							'Domain',
							'Date',
							'Title',
							'Duration',
							'Status',
						]}
					/>
				}
				defaultValue={['0']}
			>
				{items.map(
					({ domain, date, duration, status, description }, i) => (
						<DataTableRow
							key={i}
							id={String(i)}
						>
							<DataTableCell
								className='relative w-full min-w-[200px]'
								extraPost={description}
							>
								<div className='flex w-full items-center justify-between gap-2 font-display text-lg font-bold'>
									{domain}
								</div>
							</DataTableCell>
							<DataTableCell className='whitespace-nowrap'>
								{date}
							</DataTableCell>
							<DataTableCell className='whitespace-nowrap'>
								{duration}
							</DataTableCell>
							<DataTableCell>{statusChips[status]}</DataTableCell>
							<DataTableCell className='flex items-center gap-2'>
								<IconButton
									variant='filled'
									title='Read More'
									className='!bg-accent-1'
								>
									<FileTextIcon size='1rem' />
								</IconButton>
								<DataTableRowExpandButton />
								<EventRowMenuButton className='ml-1' />
							</DataTableCell>
						</DataTableRow>
					),
				)}
			</DataTable>
		</Panel>
	);
};
