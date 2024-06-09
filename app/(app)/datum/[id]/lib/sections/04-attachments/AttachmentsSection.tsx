'use client';

import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { DataTable } from '@/app/lib/glassmorphic/data-table/DataTable';
import { DataTableCell } from '@/app/lib/glassmorphic/data-table/DataTableCell';
import { DataTableHeaderRow } from '@/app/lib/glassmorphic/data-table/DataTableHeaderRow';
import { DataTableRow } from '@/app/lib/glassmorphic/data-table/DataTableRow';
import { DataTableRowExpandButton } from '@/app/lib/glassmorphic/data-table/DataTableRowExpandButton';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import { FileTextIcon } from 'lucide-react';

type Attachment = {
	filename: string;
	date: string;
	description: string;
	owner: string;
};

const attachments: Attachment[] = [
	{
		filename: 'GRAPHICS.DOCX',
		date: '5 April 2024 3:45 pm',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		owner: 'Daniel Tiong',
	},
	{
		filename: 'Affin Project',
		date: '5 April 2024 3:45 pm',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		owner: 'Daniel Tiong',
	},
	{
		filename: 'Affin Project',
		date: '5 April 2024 3:45 pm',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		owner: 'Daniel Tiong',
	},
	{
		filename: 'Affin Project',
		date: '5 April 2024 3:45 pm',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		owner: 'Daniel Tiong',
	},
];

export const AttachmentsSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('flex flex-col gap-8 p-[--padding]', className)}>
			<PanelTitle>Attachments</PanelTitle>
			<DataTable
				header={<DataTableHeaderRow columns={['File Name', 'Owner']} />}
				defaultValue={['0']}
			>
				{attachments.map(
					({ filename, date, description, owner }, i) => (
						<DataTableRow
							key={i}
							id={String(i)}
						>
							<DataTableCell
								extraPre={date}
								extraPost={description}
								className='w-full min-w-[200px]'
							>
								<div className='h3 w-full text-fg-1'>
									{filename}
								</div>
							</DataTableCell>
							<DataTableCell className='whitespace-nowrap'>
								{owner}
							</DataTableCell>
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
					),
				)}
			</DataTable>
		</Panel>
	);
};
