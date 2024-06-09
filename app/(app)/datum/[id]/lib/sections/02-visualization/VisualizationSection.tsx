import Image from 'next/image';
import info from './info.png';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';

export const VisualizationSection = ({
	className,
}: Props.WithClassName<{}>) => {
	return (
		<Image
			src={info}
			alt='Visualization'
			className={clsx(
				`animate-[_spin_10s_cubic-bezier(0.83,_0,_0.17,_1)_infinite_alternate]
				object-contain`,
				className,
			)}
		/>
	);
};
