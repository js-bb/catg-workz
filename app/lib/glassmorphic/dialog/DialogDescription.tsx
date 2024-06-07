import clsx from 'clsx';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type Props } from '../../utils/type/Props';

export const DialogDescription = ({
	children,
	className,
}: Props.WithClassName.WithChildren<{}>) => {
	return (
		<DialogPrimitive.Description asChild>
			<div className={clsx('h4 mt-2', className)}>{children}</div>
		</DialogPrimitive.Description>
	);
};
