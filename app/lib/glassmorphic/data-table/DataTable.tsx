'use client';

import { type ReactNode } from 'react';
import { type Props } from '../../utils/type/Props';
import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';

export const DataTable = ({
	className,
	children,
	header = null,
	...rest
}: Props.WithClassName.WithChildren<
	{
		header?: ReactNode | null;
	} & Omit<Accordion.AccordionMultipleProps, 'type'>
>) => {
	return (
		<div className={clsx('flex w-full flex-col gap-10', className)}>
			<Accordion.Root
				type='multiple'
				className='-mx-6 -my-6 overflow-x-auto'
				{...rest}
			>
				<table className='w-full border-separate border-spacing-x-6 border-spacing-y-6'>
					{header && <thead>{header}</thead>}
					<tbody className='align-top'>{children}</tbody>
				</table>
			</Accordion.Root>
		</div>
	);
};
