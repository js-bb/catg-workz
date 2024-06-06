import * as DialogPrimitive from '@radix-ui/react-dialog';
import { type ReactElement } from 'react';
import { type Props } from '../../utils/type/Props';

export const DialogButton = ({
	children,
	content,
}: Props.WithChildren<{
	content: ReactElement;
}>) => {
	return (
		<DialogPrimitive.Root>
			<DialogPrimitive.Trigger asChild>
				{children}
			</DialogPrimitive.Trigger>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay
					className='[&[data-state="closed"]]:animate-fade-out [&[data-state="open"]]:animate-fade-in
						fixed inset-0 h-full w-full bg-fg-1/30'
				/>
				<DialogPrimitive.Content
					className='group fixed left-1/2 top-1/2 w-full max-w-[380px] -translate-x-1/2
						-translate-y-1/2 rounded'
				>
					{content}
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
};
