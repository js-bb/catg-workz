'use client';

import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { type Props } from '@/app/lib/utils/type/Props';
import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { PencilIcon } from 'lucide-react';
import { type EventItem } from './EventItem';
import { EventRow } from './EventRow';

const columnNames = {
	domain: 'Domain',
	date: 'Date',
	title: 'Title',
	duration: 'Duration',
	status: 'Status',
} as const satisfies Partial<Record<keyof EventItem, string>>;
const columns = Object.keys(columnNames) as (keyof typeof columnNames)[];

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

export const EventSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel
			className={clsx(
				'flex w-full basis-[970px] p-[--padding]',
				className,
			)}
		>
			<div className='flex w-full flex-col gap-10 text-md'>
				<div className='flex flex-col gap-2'>
					<div className='h1 flex items-center gap-2'>
						Event
						<PencilIcon
							className='inline'
							size='0.7em'
						/>
					</div>
					<div className='h4'>1 April 2024 - 30 April 2024</div>
				</div>

				<Accordion.Root
					type='multiple'
					className='-mx-8 -my-8 overflow-x-auto'
				>
					<table className='w-full border-separate border-spacing-x-8 border-spacing-y-8'>
						<thead>
							<tr>
								{columns.map((k) => (
									<th
										key={k}
										className='text-start font-normal text-fg-1/70'
									>
										{columnNames[k]}
									</th>
								))}
							</tr>
						</thead>
						<tbody className='align-top'>
							{items.map((item, i) => (
								<EventRow
									key={i}
									id={`${i}`}
									columns={columns}
									{...item}
								/>
							))}
						</tbody>
					</table>
				</Accordion.Root>
			</div>
		</Panel>
	);
};
