import { type Props } from '@/app/lib/utils/type/Props';
import ic_arrow_in_box from './ic-arrow-in-box.svg';
import ic_calendar from './ic-calendar.svg';
import ic_home from './ic-home.svg';
import ic_mail from './ic-mail.svg';
import ic_person from './ic-person.svg';
import ic_phone from './ic-phone.svg';
import ic_text_bubble from './ic-text-bubble.svg';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import Image from 'next/image';
import clsx from 'clsx';

const iconColumn1 = [
	[ic_person, 'Account'],
	[ic_phone, 'Phone'],
	[ic_text_bubble, 'Message'],
	[ic_mail, 'Email'],
] as const;
const iconColumn2 = [
	[ic_calendar, 'Calendar'],
	[ic_arrow_in_box, 'Package'],
	[ic_home, 'Home'],
];

export const EventRowMenuPanel = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('p-4', className)}>
			<div className='flex gap-2'>
				<div className='flex flex-col gap-2'>
					{iconColumn1.map(([icon, title], i) => (
						<IconButton
							key={i}
							variant='filled'
							title={title}
						>
							<Image
								src={icon}
								alt=''
								className='h-4 w-4 max-w-none'
							/>
						</IconButton>
					))}
				</div>
				<div className='flex flex-col gap-2 pt-4'>
					{iconColumn2.map(([icon, title], i) => (
						<IconButton
							key={i}
							variant='filled'
							title={title}
						>
							<Image
								src={icon}
								alt=''
								className='h-4 w-4 max-w-none'
							/>
						</IconButton>
					))}
				</div>
			</div>
		</Panel>
	);
};
