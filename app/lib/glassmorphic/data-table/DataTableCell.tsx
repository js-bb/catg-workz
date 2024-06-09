import { type ReactNode } from 'react';
import { type Props } from '../../utils/type/Props';
import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';

export const DataTableCell = ({
	children,
	className,
	extraPre = null,
	extraPost = null,
}: Props.WithChildren.WithClassName<{
	extraPre?: ReactNode | null;
	extraPost?: ReactNode | null;
}>) => {
	return (
		<td className={clsx('', className)}>
			{extraPre && (
				<Accordion.Content asChild>
					<div
						className='overflow-hidden pb-2 pr-8 group-[&[data-state="closed"]]:animate-accordion-close
							group-[&[data-state="open"]]:animate-accordion-open'
					>
						{extraPre}
					</div>
				</Accordion.Content>
			)}
			{children}
			{extraPost && (
				<Accordion.Content asChild>
					<div
						className='overflow-hidden pr-8 pt-2 group-[&[data-state="closed"]]:animate-accordion-close
							group-[&[data-state="open"]]:animate-accordion-open'
					>
						{extraPost}
					</div>
				</Accordion.Content>
			)}
		</td>
	);
};
