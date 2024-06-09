'use client';

import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { Chip } from '@/app/lib/glassmorphic/chip/Chip';
import { DataTable } from '@/app/lib/glassmorphic/data-table/DataTable';
import { DataTableCell } from '@/app/lib/glassmorphic/data-table/DataTableCell';
import { DataTableHeaderRow } from '@/app/lib/glassmorphic/data-table/DataTableHeaderRow';
import { DataTableRow } from '@/app/lib/glassmorphic/data-table/DataTableRow';
import { DataTableRowExpandButton } from '@/app/lib/glassmorphic/data-table/DataTableRowExpandButton';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import { CheckIcon, FileTextIcon, XIcon } from 'lucide-react';
import { type ReactNode } from 'react';

type Return = {
	id: string;
	description: string;
	lastUpdated: string;
	status: 'register' | 'deleted';
};

const statusChips = {
	deleted: (
		<Chip
			variant='default'
			icon={<XIcon />}
		>
			Deleted
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
} as const satisfies Record<Return['status'], ReactNode>;

const returns: Return[] = [
	{
		id: 'C2PGUICAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
		status: 'register',
	},
	{
		id: 'C2PGUSRCAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
		status: 'deleted',
	},
	{
		id: 'C2PGUSRCAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
		status: 'deleted',
	},
	{
		id: 'C2PGUSRCAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
		status: 'deleted',
	},
];

export const ReturnsSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('flex flex-col gap-8 p-[--padding]', className)}>
			<PanelTitle>Returns</PanelTitle>
			<DataTable
				header={
					<DataTableHeaderRow
						columns={['ID', 'Last Updated', 'Status']}
					/>
				}
				defaultValue={['0']}
			>
				{returns.map(({ id, description, lastUpdated, status }, i) => (
					<DataTableRow
						key={i}
						id={String(i)}
					>
						<DataTableCell
							extraPost={description}
							className='w-full min-w-[200px]'
						>
							<div className='h3 w-full text-fg-1'>{id}</div>
						</DataTableCell>
						<DataTableCell className='whitespace-nowrap'>
							{lastUpdated}
						</DataTableCell>
						<DataTableCell>{statusChips[status]}</DataTableCell>
						<DataTableCell className='flex gap-1'>
							<IconButton
								variant='filled'
								title='Read More'
								className='!bg-accent-1'
							>
								<FileTextIcon size='1rem' />
							</IconButton>
							<DataTableRowExpandButton />
						</DataTableCell>
					</DataTableRow>
				))}
			</DataTable>
		</Panel>
	);
};
