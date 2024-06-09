import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { type Props } from '@/app/lib/utils/type/Props';
import houston from '@/app/lib/mock/avatar/houston.png';
import Image, { type StaticImageData } from 'next/image';
import { Chip } from '@/app/lib/glassmorphic/chip/Chip';
import clsx from 'clsx';

type Person = {
	name: string;
	email: string;
	assistant: string;
	role: string;
	company: string;
	avatar: StaticImageData;
};

const persons: Person[] = Array(3)
	.fill(undefined)
	.map((_, i) => ({
		name: `Tan Tiong Heo ${i}`,
		email: 'tiongheo.tan@pcm.silverlake.com',
		assistant: 'Yong Ji Yan',
		role: 'Director',
		company: 'SAL Group',
		avatar: houston,
	}));

export const TeamSection = ({ className }: Props.WithClassName<{}>) => {
	return (
		<Panel className={clsx('flex flex-col gap-8 p-[--padding]', className)}>
			<PanelTitle>Team</PanelTitle>
			<div className='flex flex-col gap-4'>
				{persons.map(
					({ name, email, assistant, role, company, avatar }, i) => (
						<div
							key={i}
							className='flex gap-4'
						>
							<Image
								src={avatar}
								alt=''
								className='h-10 w-10 rounded-full border border-white/30 object-cover'
							/>
							<div className='flex flex-grow flex-col gap-2'>
								<span className='h3 text-fg-1'>{name}</span>
								<span className='text-fg-1/50'>{email}</span>
								<div className='rounded-full bg-fg-1/30 px-2 py-1'>
									Asst: {assistant}
								</div>
							</div>
							<div className='flex flex-col gap-1 self-end'>
								<Chip
									variant='ok'
									icon={null}
									className='flex-grow'
								>
									{role}
								</Chip>
								<Chip
									variant='primary'
									className='flex-grow'
								>
									{company}
								</Chip>
							</div>
						</div>
					),
				)}
			</div>
		</Panel>
	);
};
