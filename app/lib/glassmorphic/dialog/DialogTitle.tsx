import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type Props } from '../../utils/type/Props';
import { IconButton } from '../button/IconButton';
import { XIcon } from 'lucide-react';
import clsx from 'clsx';

export const DialogTitle = ({
	children,
	className,
}: Props.WithChildren.WithClassName<{}>) => {
	return (
		<DialogPrimitive.Title asChild>
			<div className={clsx('h1', className)}>{children}</div>
		</DialogPrimitive.Title>
	);
};
