import clsx from 'clsx';
import { type El } from '../../utils/jsx/html';
import { type Props } from '../../utils/type/Props';
import { AsButtonOrAnchor } from './AsButtonOrAnchor';
import { Ripple } from './Ripple';
import { raise } from '../../utils/functional/raise';
import { type ComponentProps, type ReactNode } from 'react';
import { Panel } from '../panel/Panel';

export const Button = ({
	className,
	children,
	as: Component,
	variant = 'default',
	icon = null,
	...rest
}: Props.WithClassName.WithChildren.WithAs<
	{
		variant?: 'default' | 'primary' | 'outline';
		icon?: ReactNode | null;
	} & El<'button'> &
		El<'a'> &
		Omit<ComponentProps<typeof Panel>, 'variant' | 'className' | 'as'>
>) => {
	Component ??= AsButtonOrAnchor;

	return (
		<Panel
			as={({ variant: _, ...rest }) => (
				<Component
					{...rest}
					variant={variant}
				/>
			)}
			{...rest}
			className={clsx(
				`relative flex min-h-10 w-max min-w-28 items-center justify-center rounded-full
				border px-[max(0.75rem,_var(--radius))] py-[0.7085rem] text-center
				transition-all ease-out hover:brightness-105 active:brightness-110
				active:transition-none`,
				variant === 'default'
					? '!bg-bg-2'
					: variant === 'primary'
						? 'active:accent-1 border-accent-2 !bg-accent-1'
						: variant === 'outline'
							? 'border-fg-1 !bg-transparent'
							: raise(),
				className,
			)}
		>
			<Ripple className='absolute inset-0 rounded-full' />
			<span className='inline-block [&>svg]:inline-block [&>svg]:h-[1em] [&>svg]:w-[1em]'>
				{icon}
			</span>
			<span className='inline-block'>{children}</span>
		</Panel>
	);
};
