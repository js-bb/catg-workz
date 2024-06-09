'use client';

import { DataTable } from '@/app/lib/glassmorphic/data-table/DataTable';
import { DataTableCell } from '@/app/lib/glassmorphic/data-table/DataTableCell';
import { DataTableHeaderRow } from '@/app/lib/glassmorphic/data-table/DataTableHeaderRow';
import { DataTableRow } from '@/app/lib/glassmorphic/data-table/DataTableRow';
import { DataTableRowExpandButton } from '@/app/lib/glassmorphic/data-table/DataTableRowExpandButton';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';

type AssociatedRequest = {
	id: string;
	description: string;
	lastUpdated: string;
};

const returns: AssociatedRequest[] = [
	{
		id: 'C2PGUICAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
	},
	{
		id: 'C2PGUSRCAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
	},
	{
		id: 'C2PGUSRCAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
	},
	{
		id: 'C2PGUSRCAVA',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		lastUpdated: '14 May 5:23:50',
	},
];

export const AssociatedRequestsSection = ({
	className,
}: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('flex flex-col gap-8 p-[--padding]', className)}>
			<PanelTitle>Associated Requests</PanelTitle>
			<DataTable
				header={<DataTableHeaderRow columns={['ID', 'Last Updated']} />}
				defaultValue={['0']}
			>
				{returns.map(({ id, description, lastUpdated }, i) => (
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
						<DataTableCell className='flex gap-1'>
							<DataTableRowExpandButton />
						</DataTableCell>
					</DataTableRow>
				))}
			</DataTable>
		</Panel>
	);
};
