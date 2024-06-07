import clsx from 'clsx';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type Props } from '../../utils/type/Props';
import { PanelDescription } from '../panel/PanelDescription';

export const DialogPanelDescription = ({
	children,
	className,
}: Props.WithClassName.WithChildren<{}>) => {
	return (
		<DialogPrimitive.Description asChild>
			<PanelDescription className={clsx('', className)}>
				{children}
			</PanelDescription>
		</DialogPrimitive.Description>
	);
};
