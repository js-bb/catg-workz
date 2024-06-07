import Image from 'next/image';
import { type Props } from '../../utils/type/Props';
import chat_bubble_tail from './chat-bubble-tail.svg';
import clsx from 'clsx';
import { raise } from '../../utils/functional/raise';
import { type ReactNode } from 'react';

export const ChatBubble = ({
	className,
	children,
	variant = 'receiver',
	avatar,
}: Props.WithClassName.WithChildren<{
	variant?: 'sender' | 'receiver';
	avatar?: ReactNode;
}>) => {
	return (
		<div
			className={clsx(
				'flex items-end gap-4',
				variant === 'receiver'
					? 'justify-end'
					: variant === 'sender'
						? 'justify-start'
						: raise(),
			)}
		>
			{variant === 'sender' && avatar}
			<div
				className={clsx(
					'relative rounded p-4',
					variant === 'receiver'
						? 'bg-[#2B2D2B] text-fg-1'
						: variant === 'sender'
							? 'bg-[#2B2D2B] text-fg-1'
							: raise(),
					className,
				)}
			>
				{children}
				<Image
					src={chat_bubble_tail}
					alt=''
					className={clsx(
						'absolute bottom-0',
						variant === 'receiver'
							? '-right-[5px]'
							: variant === 'sender'
								? '-left-[5px] -scale-x-100'
								: raise(),
					)}
				/>
			</div>
			{variant === 'receiver' && avatar}
		</div>
	);
};
