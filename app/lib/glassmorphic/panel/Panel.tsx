import { cast } from '@/app/lib/utils/type/cast';
import clsx from 'clsx';
import {
	type ComponentPropsWithRef,
	type ComponentPropsWithoutRef,
	type ComponentProps,
	type ElementType,
	type HTMLProps,
} from 'react';
import { raise } from '../../utils/functional/raise';
import { type Props } from '../../utils/type/Props';
import { type El, div } from '../../utils/jsx/html';

export const Panel = ({
	variant = 'default',
	className,
	children,
	as: Component = div.generic,
	...rest
}: Props.WithChildren.WithClassName.WithAs<
	{
		variant?: 'default' | 'inset';
	} & El
>) => {
	cast<ElementType<HTMLProps<HTMLDivElement>>>(Component);

	return (
		<Component
			{...rest}
			className={clsx(
				'rounded bg-black/20 backdrop-blur-[56px]',
				className,
			)}
			style={{
				boxShadow: `inset -1px -1.8px 1px -1px rgba(255, 255, 255, 0.6),
							inset 1px 1.3px 1px -1px rgba(255, 255, 255, 0.8),
							inset 0px -1px 2px -1px rgba(0, 0, 0, 0.8),
							${
								variant === 'default'
									? `0px 5px 17px -1.5px rgba(0, 0, 0, 0.1)`
									: variant === 'inset'
										? `inset 0px 10px 17px -3px rgba(0, 0, 0, 0.5)`
										: raise()
							}`,
			}}
		>
			{children}
		</Component>
	);
};
