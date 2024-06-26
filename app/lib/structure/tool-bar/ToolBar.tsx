import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import Image from 'next/image';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { Panel } from '../../glassmorphic/panel/Panel';
import { CommentsDialogButton } from './CommentsDialogButton';
import ic_command_chain from './ic-command-chain.svg';
import ic_figure_walk from './ic-figure-walk.svg';
import ic_monitor from './ic-monitor.svg';
import ic_outside_link from './ic-outside-link.svg';
import ic_tag_label from './ic-tag-label.svg';
import ic_user_screen from './ic-user-screen.svg';
import { AssociatedFactoryPartsDialogButton } from './AssociatedFactoryPartsDialogButton';

export const ToolBar = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('flex w-max flex-col gap-6 p-4', className)}>
			<IconButton
				side='left'
				sideOffset={20}
				title='Display'
			>
				<Image
					src={ic_user_screen}
					alt=''
					className='mx-auto h-6'
				/>
			</IconButton>
			<IconButton
				side='left'
				sideOffset={20}
				title='Share Screen'
			>
				<Image
					src={ic_figure_walk}
					alt=''
					className='mx-auto h-6'
				/>
			</IconButton>
			<AssociatedFactoryPartsDialogButton />
			<CommentsDialogButton />
			<IconButton
				side='left'
				sideOffset={20}
				title='Open in New Tab'
			>
				<Image
					src={ic_outside_link}
					alt=''
					className='mx-auto h-6'
				/>
			</IconButton>
			<IconButton
				side='left'
				sideOffset={20}
				title='Tags'
			>
				<Image
					src={ic_tag_label}
					alt=''
					className='mx-auto h-6'
				/>
			</IconButton>
			<IconButton
				side='left'
				sideOffset={20}
				title='Display'
			>
				<Image
					src={ic_monitor}
					alt=''
					className='mx-auto h-6'
				/>
			</IconButton>
		</Panel>
	);
};
