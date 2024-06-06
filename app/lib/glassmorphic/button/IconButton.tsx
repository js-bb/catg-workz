'use client';

import { type Props } from '@/app/lib/utils/type/Props';
import * as Tooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import { type ComponentProps, type ComponentPropsWithoutRef } from 'react';
import { raise } from '../../utils/functional/raise';
import { Panel } from '../panel/Panel';
import { Ripple } from './Ripple';
import { type El } from '../../utils/jsx/html';

const ButtonOrAnchor = (
	props:
		| ComponentPropsWithoutRef<'button'>
		| (ComponentPropsWithoutRef<'a'> & { href: string }),
) => ('href' in props ? <a {...props} /> : <button {...props} />);

export const IconButton = ({
	className,
	children,
	as: Component = ButtonOrAnchor,
	title,
	variant = 'default',
	side = 'top',
	sideOffset = 10,
	...rest
}: Props.WithClassName.WithChildren.WithAs<
	{
		title?: string;
		variant?: 'default' | 'filled';
		side?: ComponentProps<typeof Tooltip.Content>['side'];
		sideOffset?: ComponentProps<typeof Tooltip.Content>['sideOffset'];
	} & El<'button'> &
		El<'a'>
>) => {
	const button = (
		<Component
			{...rest}
			title={title}
			className={clsx(
				`relative inline-block h-max cursor-pointer rounded-full text-[1rem] ease-out
				before:absolute before:inset-0 before:m-auto before:rounded-full before:border
				before:border-fg-1/0 before:bg-fg-1/0 before:p-0 before:transition-all
				hover:before:bg-fg-1/10 active:before:border-fg-1/30 active:before:bg-fg-1/20
				active:before:transition-none`,
				variant === 'filled'
					? 'rounded-full bg-fg-1/30 p-1.5 hover:before:inset-0 hover:before:p-0'
					: variant === 'default'
						? 'hover:before:-inset-2 hover:before:p-2'
						: raise(),
				className,
			)}
		>
			<Ripple
				className={clsx(
					'absolute z-10 rounded-full',
					variant === 'filled'
						? 'inset-0 !h-full !w-full'
						: variant === 'default'
							? '-inset-2 !h-[calc(100%_+_1rem)] !w-[calc(100%_+_1rem)]'
							: raise(),
				)}
			/>
			{children}
		</Component>
	);

	return title ? (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>{button}</Tooltip.Trigger>
			<Tooltip.Portal>
				<Tooltip.Content
					className='[&[data-state="closed"][data-side="bottom"]]:animate-swipe-out-top
						[&[data-state="closed"][data-side="left"]]:animate-swipe-out-right
						[&[data-state="closed"][data-side="right"]]:animate-swipe-out-left
						[&[data-state="closed"][data-side="top"]]:animate-swipe-out-bottom
						[&[data-state="delayed-open"][data-side="bottom"]]:animate-swipe-in-top
						[&[data-state="delayed-open"][data-side="left"]]:animate-swipe-in-right
						[&[data-state="delayed-open"][data-side="right"]]:animate-swipe-in-left
						[&[data-state="delayed-open"][data-side="top"]]:animate-swipe-in-bottom'
					side={side}
					sideOffset={sideOffset}
				>
					<Panel className='!bg-bg-3 p-2 px-3'>{title}</Panel>
				</Tooltip.Content>
			</Tooltip.Portal>
		</Tooltip.Root>
	) : (
		button
	);
};
