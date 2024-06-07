import clsx from 'clsx';
import { Panel } from '../panel/Panel';
import { type Props } from '../../utils/type/Props';
import { type ReactNode, type ComponentProps, ReactElement } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { IconButton } from '../button/IconButton';

const CloseIconButton = ({ className }: Props.WithClassName<{}>) => {
	return (
		<IconButton
			variant='filled'
			className={clsx(
				'!absolute right-[calc(var(--padding)_/_2)] top-[calc(var(--padding)_/_2)]',
				className,
			)}
		>
			<XIcon size='1em' />
		</IconButton>
	);
};

export const DialogPanel = ({
	className,
	children,
	...rest
}: Props.WithClassName.WithChildren<{} & ComponentProps<typeof Panel>>) => {
	return (
		<Panel
			{...rest}
			className={clsx(
				`group-[[data-state="closed"]]:animate-swipe-out-bottom
				group-[[data-state="open"]]:animate-swipe-in-bottom`,
				className,
			)}
		>
			{children}
		</Panel>
	);
};
