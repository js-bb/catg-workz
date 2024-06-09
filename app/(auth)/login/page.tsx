import { Button } from '@/app/lib/glassmorphic/button/Button';
import { PanelDescription } from '@/app/lib/glassmorphic/panel/PanelDescription';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { CheckIcon } from 'lucide-react';
import { Panel } from '@/app/lib/glassmorphic/panel/Panel';

const LoginPage = () => {
	return (
		<div className='absolute inset-0 flex flex-col items-center justify-center p-[--padding]'>
			<Panel
				className='flex max-h-full w-full max-w-[400px] flex-col flex-wrap justify-center gap-10
					p-[--padding]'
			>
				<div className='flex flex-col items-center text-center'>
					<PanelTitle className='mt-2 text-[2rem]'>
						Welcome Back
					</PanelTitle>
					<PanelDescription>
						Please enter your details to log in.
					</PanelDescription>
				</div>
				<div className='flex w-full flex-grow flex-col justify-start gap-4'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='login-username'>User ID</label>
						<Panel
							variant='inset'
							className='rounded-full'
						>
							<input
								id='login-username'
								type='text'
								className='h-10 w-full rounded-full bg-transparent px-4'
							/>
						</Panel>
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor='login-password'>Password</label>
						<Panel
							variant='inset'
							className='rounded-full'
						>
							<input
								id='login-password'
								type='text'
								className='h-10 w-full rounded-full bg-transparent px-4'
							/>
						</Panel>
					</div>
					<div className='flex items-center gap-2'>
						<Panel
							variant='inset'
							className='relative rounded-full'
						>
							<input
								id='login-remember'
								type='checkbox'
								className='block h-5 w-5 appearance-none rounded-full bg-transparent'
							/>
							<CheckIcon
								className='pointer-events-none absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2
									-translate-y-1/2 [input:not(:checked)~&]:hidden'
							/>
						</Panel>
						<label
							htmlFor='login-remember'
							className='h4'
						>
							Remember me on this device for 30 days
						</label>
					</div>
					<div className='flex w-full justify-center pt-4'>
						<Button
							variant='primary'
							href='/otp'
						>
							Login
						</Button>
					</div>
				</div>
			</Panel>
		</div>
	);
};

export default LoginPage;
