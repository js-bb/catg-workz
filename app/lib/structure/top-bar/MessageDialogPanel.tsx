import clsx from 'clsx';
import { Ripple } from '../../glassmorphic/button/Ripple';
import { DialogPanel } from '../../glassmorphic/dialog/DialogPanel';
import { Panel } from '../../glassmorphic/panel/Panel';
import { type El } from '../../utils/jsx/html';
import { type Props } from '../../utils/type/Props';
import { DialogPanelTitle } from '../../glassmorphic/dialog/DialogPanelTitle';

export const MessageDialogPanel = ({
	className,
	onSubmit,
}: Props.WithClassName<{
	onSubmit?: El<'form'>['onSubmit'];
}>) => {
	return (
		<DialogPanel className={clsx('p-[--padding]', className)}>
			<DialogPanelTitle>New Message</DialogPanelTitle>
			<form
				className='flex flex-col gap-4 pt-4'
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit?.(e);
				}}
			>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='message-to'
						className='text-md'
					>
						To:
					</label>
					<Panel
						variant='inset'
						className='rounded-md'
					>
						<input
							id='message-to'
							type='text'
							className='h-10 w-full rounded-md bg-transparent'
						/>
					</Panel>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='message-subject'
						className='text-md'
					>
						Subject:
					</label>
					<Panel
						variant='inset'
						className='rounded-md'
					>
						<input
							id='message-subject'
							type='text'
							className='h-10 w-full rounded-md bg-transparent'
						/>
					</Panel>
				</div>
				<div className='flex flex-col gap-2'>
					<label
						htmlFor='message-message'
						className='text-md'
					>
						Message:
					</label>
					<Panel
						variant='inset'
						className='rounded-md'
					>
						<textarea
							id='message-message'
							className='h-36 min-h-10 w-full resize-y rounded-md bg-transparent'
						/>
					</Panel>
				</div>
				<div className='flex w-full justify-center'>
					<button
						className='relative h-10 w-full max-w-[111px] rounded-full border border-fg-1/0
							bg-[#0181FC] text-md transition-all ease-out hover:brightness-105
							active:border-fg-1/30 active:brightness-110'
					>
						<Ripple className='absolute inset-0 rounded-full' />
						Send
					</button>
				</div>
			</form>
		</DialogPanel>
	);
};