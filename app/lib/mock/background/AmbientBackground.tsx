import Image from 'next/image';
import bg from './bg.png';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';

export const AmbientBackground = ({ className }: Props.WithClassName<{}>) => {
	return (
		<div className='pointer-events-none sticky top-0 h-0 w-full'>
			<Image
				src={bg}
				alt=''
				className={clsx(
					'absolute inset-0 -z-10 h-lvh w-full object-cover',
					className,
				)}
			/>
		</div>
	);
};
