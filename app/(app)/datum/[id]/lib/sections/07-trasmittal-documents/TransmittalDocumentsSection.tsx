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
import { CheckIcon, FileTextIcon, UserIcon } from 'lucide-react';
import { Fragment, type ReactNode } from 'react';

type TransmittalDocument = {
	date: string;
	filename: string;
	description: string;
	tags: ('accepted' | 'brochure')[];
};

const tagsChips = {
	brochure: (
		<Chip
			variant='primary'
			className='flex-grow'
		>
			Brochure
		</Chip>
	),
	accepted: (
		<Chip
			variant='ok'
			icon={<CheckIcon />}
			className='flex-grow'
		>
			Accepted
		</Chip>
	),
} as const satisfies Record<TransmittalDocument['tags'][number], ReactNode>;

const transmittalDocuments: TransmittalDocument[] = [
	{
		filename: 'GRAPHICS.DOCX',
		date: '5 April 2024 3:45 pm',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		tags: ['accepted', 'brochure'],
	},
	{
		filename: 'GRAPHICS.DOCX',
		date: '5 April 2024 3:45 pm',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		tags: ['accepted', 'brochure'],
	},
	{
		filename: 'GRAPHICS.DOCX',
		date: '5 April 2024 3:45 pm',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		tags: ['accepted', 'brochure'],
	},
];

export const TransmittalDocumentsSection = ({
	className,
}: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('flex flex-col gap-8 p-[--padding]', className)}>
			<PanelTitle>Transmittal Documents</PanelTitle>
			<DataTable
				header={<DataTableHeaderRow columns={['ID', 'Last Updated']} />}
				defaultValue={['0']}
			>
				{transmittalDocuments.map(
					({ filename, date, description, tags }, i) => (
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
							<DataTableCell>
								<div className='flex flex-col gap-1'>
									{tags.map((tag, i) => (
										<Fragment key={i}>
											{tagsChips[tag]}
										</Fragment>
									))}
								</div>
							</DataTableCell>
							<DataTableCell className='flex gap-1'>
								<IconButton
									variant='filled'
									title='Account'
								>
									<UserIcon size='1rem' />
								</IconButton>
								<IconButton
									variant='filled'
									title='Read More'
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
