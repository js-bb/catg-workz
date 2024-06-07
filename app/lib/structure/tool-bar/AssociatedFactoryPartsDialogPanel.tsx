import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { IconButton } from '../../glassmorphic/button/IconButton';
import { Chip } from '../../glassmorphic/chip/Chip';
import { DialogPanel } from '../../glassmorphic/dialog/DialogPanel';
import { DialogPanelTitle } from '../../glassmorphic/dialog/DialogPanelTitle';
import { Panel } from '../../glassmorphic/panel/Panel';
import { type Props } from '../../utils/type/Props';

export const AssociatedFactoryPartsDialogPanel = ({
	className,
}: Props.WithClassName<{}>) => {
	return (
		<DialogPanel
			className={clsx(
				`flex h-full max-h-[533px] w-full max-w-[380px] flex-col justify-between gap-6
				p-[--padding]`,
				className,
			)}
		>
			<DialogPanelTitle>Associated Fatcory Parts</DialogPanelTitle>
			<Accordion.Root
				type='multiple'
				defaultValue={['eventzcmd']}
			>
				<Accordion.Item value='eventzcmd'>
					<Accordion.Trigger className='group/trigger flex w-full items-center justify-between'>
						<span className='font-bold'>EVENTZCMD</span>
						<IconButton
							variant='filled'
							className='group-[&[data-state="open"]]/trigger:hidden'
							title='Expand'
						>
							<ChevronDownIcon size='1rem' />
						</IconButton>
						<IconButton
							variant='filled'
							className='group-[&[data-state="closed"]]/trigger:hidden'
							title='Collapse'
						>
							<ChevronUpIcon size='1rem' />
						</IconButton>
					</Accordion.Trigger>
					<Accordion.Content
						asChild
						className=''
					>
						<div
							className='flex flex-col gap-1 overflow-hidden
								[&[data-state="closed"]]:animate-accordion-close
								[&[data-state="open"]]:animate-accordion-open'
						>
							<div className='h-1 flex-shrink-0'></div>
							{[
								'C2PGUICAVA - C2P GUI Screens',
								'C2PGUICAVA - C2P User List',
								'C2PGUICAVA - C2P Button Inventory',
							].map((name, i) => (
								<div
									key={i}
									className='flex w-full items-center gap-2'
								>
									<Panel className='flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full'>
										<CheckIcon size='1em' />
									</Panel>
									<span className='inline-block w-full'>
										{name}
									</span>
									<Chip
										variant='ok'
										icon={<CheckIcon />}
									>
										Register
									</Chip>
								</div>
							))}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</DialogPanel>
	);
};
