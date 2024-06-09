import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { IconButton } from '../button/IconButton';

export const DataTableRowExpandButton = () => {
	return (
		<IconButton
			variant='filled'
			title='Toggle Expand'
		>
			<ChevronDownIcon
				className='group-[[data-state="open"]]:hidden'
				size='1rem'
			/>
			<ChevronUpIcon
				className='group-[[data-state="closed"]]:hidden'
				size='1rem'
			/>
		</IconButton>
	);
};
