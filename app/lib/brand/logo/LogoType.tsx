import clsx from 'clsx';
import { type Props } from '../../utils/type/Props';

export const LogoType = ({ className }: Props.WithClassName<{}>) => {
	return <div className={clsx('h1', className)}>CatgWorkz</div>;
};
