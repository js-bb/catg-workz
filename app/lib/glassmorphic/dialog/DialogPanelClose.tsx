import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { IconButton } from '../button/IconButton';
import { type Props } from '../../utils/type/Props';
import clsx from 'clsx';

export const DialogPanelClose = ({ className }: Props.WithClassName<{}>) => {
	return (
		<DialogPrimitive.Close asChild>
			<IconButton
				variant='filled'
				className={clsx(
					'!absolute right-[calc(var(--padding)_/_2)] top-[calc(var(--padding)_/_2)]',
					className,
				)}
			>
				<XIcon size='1em' />
			</IconButton>
		</DialogPrimitive.Close>
	);
};
