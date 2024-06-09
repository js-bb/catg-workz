import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { type Props } from '../../utils/type/Props';

export const DataTableRow = ({
	className,
	children,
	id,
}: Props.WithClassName.WithChildren<{
	id: string;
}>) => {
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
					className={clsx('cursor-pointer rounded-sm', className)}
					role='button'
					tabIndex={0}
				>
					{children}
				</tr>
			</Accordion.Trigger>
		</Accordion.Item>
	);
};
