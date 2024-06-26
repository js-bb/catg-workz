import clsx from 'clsx';
import { type Props } from '../../utils/type/Props';
import { type ReactNode } from 'react';
import { CheckIcon, CircleAlertIcon, TriangleAlertIcon } from 'lucide-react';
import { raise } from '../../utils/functional/raise';

export const Chip = ({
	className,
	children,
	variant = 'default',
	icon = variant === 'ok' ? (
		<CheckIcon />
	) : variant === 'warning' ? (
		<TriangleAlertIcon />
	) : variant === 'error' ? (
		<CircleAlertIcon />
	) : null,
}: Props.WithClassName.WithChildren<{
	variant?: 'default' | 'primary' | 'ok' | 'warning' | 'error';
	icon?: ReactNode | null;
}>) => {
	return (
		<div
			className={clsx(
				'flex items-center justify-center gap-[0.25rem] rounded-full px-3 py-1.5',
				variant === 'default'
					? 'bg-[#02020228]'
					: variant === 'primary'
						? 'bg-accent-1'
						: variant === 'ok'
							? 'bg-green-500'
							: variant === 'warning'
								? 'bg-yellow-500'
								: variant === 'error'
									? 'bg-red-500'
									: raise(),
				className,
			)}
		>
			<span className='inline-block [&>svg]:inline-block [&>svg]:h-[1em] [&>svg]:w-[1em]'>
				{icon}
			</span>
			<span className='inline-block'>{children}</span>
		</div>
	);
};
