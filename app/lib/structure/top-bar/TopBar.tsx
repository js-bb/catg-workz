import { LogoType } from '@/app/lib/brand/logo/LogoType';
import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import amanda from '@/app/lib/mock/profile/amanda.png';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import { RotateCwIcon } from 'lucide-react';
import Image from 'next/image';
import ic_bell from './ic-bell.svg';
import ic_clock_progress from './ic-clock-progress.svg';
import ic_mail from './ic-mail.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { MessagePopupButton } from './MessagePopupButton';

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
			<div className='flex gap-5'>
				<IconButton
					href='#'
					title='History'
					className='relative'
				>
					<Image
						src={ic_clock_progress}
						alt=''
						className='h-6 w-6'
					/>
					<div className='absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#EA333E]' />
				</IconButton>

				<MessagePopupButton />

				<IconButton
					href='#'
					title='Notifications'
					className='relative'
				>
					<Image
						src={ic_bell}
						alt=''
						className='h-6 w-6'
					/>
					<div className='absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#EA333E]' />
				</IconButton>
			</div>
			<div className='flex h-full items-center gap-4'>
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
