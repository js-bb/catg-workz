import { LogoType } from '@/app/lib/brand/logo/LogoType';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import amanda from '@/app/lib/mock/profile/amanda.png';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import { RotateCwIcon } from 'lucide-react';
import Image from 'next/image';
import { HistoryButton } from './HistoryButton';
import { MessagePopupButton } from './MessagePopupButton';
import { NotificationButton } from './NotificationButton';

export const TopBar = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel
			className={clsx(
				'flex items-center gap-7 bg-black/20 p-3 pl-7 backdrop-blur',
				className,
			)}
		>
			<LogoType />
			<Panel
				className='relative flex-grow rounded-full text-md font-medium'
				variant='inset'
			>
				<div className='absolute left-4 top-1/2 -translate-y-1/2'>
					Search
				</div>
				<input className='h-10 w-full rounded-full bg-transparent' />
				<div className='absolute right-4 top-1/2 -translate-y-1/2'>
					<RotateCwIcon size='1em' />
				</div>
			</Panel>
			<div className='flex flex-shrink-0 gap-5'>
				<HistoryButton />
				<MessagePopupButton />
				<NotificationButton />
			</div>
			<div className='flex h-full flex-shrink-0 items-center gap-4'>
				<div className='h3'>Hello, Amanda!</div>
				<Panel
					as={(props) => (
						<Image
							src={amanda}
							alt='Profile picture'
							{...props}
							className={clsx(
								props.className,
								'h-10 w-10 rounded-full border border-white/30 object-cover',
							)}
						/>
					)}
				/>
			</div>
		</Panel>
	);
};
