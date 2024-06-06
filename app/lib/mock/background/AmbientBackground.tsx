import Image from 'next/image';
import bg from './bg.png';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';

export const AmbientBackground = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Image
			src={bg}
			alt=''
			className={clsx(
				'pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover',
				className,
			)}
		/>
	);
};
