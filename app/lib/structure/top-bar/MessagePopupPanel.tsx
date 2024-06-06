import { Dialog } from '@radix-ui/react-dialog';
import { Panel } from '../../glassmorphic/panel/Panel';
import { type Props } from '../../utils/type/Props';
import { type ReactElement } from 'react';
import clsx from 'clsx';

export const MessagePopupPanel = ({
	className,
	heading,
}: Props.WithClassName<{
	heading: ReactElement;
}>) => {
	return (
		<Panel className={clsx('p-[--padding]', className)}>{heading}</Panel>
	);
};
