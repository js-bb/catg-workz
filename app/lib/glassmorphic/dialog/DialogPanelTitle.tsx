import * as DialogPrimitive from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { type Props } from '../../utils/type/Props';
import { PanelTitle } from '../panel/PanelTitle';

export const DialogPanelTitle = ({
	children,
	className,
}: Props.WithChildren.WithClassName<{}>) => {
	return (
		<DialogPrimitive.Title asChild>
			<PanelTitle className={clsx('', className)}>{children}</PanelTitle>
		</DialogPrimitive.Title>
	);
};
