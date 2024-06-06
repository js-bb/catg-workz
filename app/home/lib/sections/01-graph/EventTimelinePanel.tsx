'use client';

import { IconButton } from '@/app/lib/glassmorphic/button/IconButton';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { Picker } from '@/app/lib/glassmorphic/picker/Picker';
import { clamp } from '@/app/lib/utils/math/clamp';
import { type Props } from '@/app/lib/utils/type/Props';
import clsx from 'clsx';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	MoreHorizontalIcon,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const pastChoices = ['Last Month', 'Last Week'] as const;
const presentChoices = ['Yesterday', 'Today', 'Tomorrow'] as const;
const futureChoices = ['Next Week', 'Next Month'] as const;

export const EventTimelinePanel = ({ className }: Props.WithClassName<{}>) => {
	const [pickedIndex, setPickedIndex] = useState(1);
	const [pastExpanded, setPastExpanded] = useState(false);
	const [futureExpanded, setFutureExpanded] = useState(false);
	const items = useMemo(
		() => [
			...(pastExpanded ? pastChoices : []),
			...presentChoices,
			...(futureExpanded ? futureChoices : []),
		],
		[pastExpanded, futureExpanded],
	);

	return (
		<Panel
			className={clsx(
				`sticky bottom-[--padding] mx-auto flex h-max flex-col items-center gap-2
				rounded-md px-6 py-3 backdrop-blur-md`,
				className,
			)}
		>
			<div className='text-md'>Event Timeline</div>
			<div className='flex items-center gap-2'>
				<IconButton
					variant='filled'
					className='flex-shrink-0'
					title={pastExpanded ? 'Less Choices' : 'More Choices'}
					onClick={() => {
						setPastExpanded(!pastExpanded);
						setPickedIndex(
							clamp(
								pickedIndex +
									pastChoices.length *
										(pastExpanded ? -1 : 1),
								0,
								Infinity,
							),
						);
					}}
				>
					{pastExpanded ? (
						<ChevronRightIcon size='1rem' />
					) : (
						<MoreHorizontalIcon size='1rem' />
					)}
				</IconButton>
				<Picker
					pickedIndex={pickedIndex}
					onPick={setPickedIndex}
					items={items}
				/>
				<IconButton
					variant='filled'
					className='flex-shrink-0'
					title={futureExpanded ? 'Less Choices' : 'More Choices'}
					onClick={() => {
						setFutureExpanded(!futureExpanded);
						setPickedIndex(
							clamp(
								pickedIndex,
								0,
								items.length -
									1 +
									(futureExpanded
										? -futureChoices.length
										: 0),
							),
						);
					}}
				>
					{futureExpanded ? (
						<ChevronLeftIcon size='1rem' />
					) : (
						<MoreHorizontalIcon size='1rem' />
					)}
				</IconButton>
			</div>
		</Panel>
	);
};
