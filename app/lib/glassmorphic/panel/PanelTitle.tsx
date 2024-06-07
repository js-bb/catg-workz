import clsx from 'clsx';
import { type Props } from '../../utils/type/Props';

export const PanelTitle = ({
	children,
	className,
}: Props.WithChildren.WithClassName<{}>) => {
	return <div className={clsx('h1', className)}>{children}</div>;
};
