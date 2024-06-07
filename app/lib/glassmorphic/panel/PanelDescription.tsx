import clsx from 'clsx';
import { type Props } from '../../utils/type/Props';

export const PanelDescription = ({
	children,
	className,
}: Props.WithChildren.WithClassName<{}>) => {
	return <div className={clsx('h4 mt-2', className)}>{children}</div>;
};
