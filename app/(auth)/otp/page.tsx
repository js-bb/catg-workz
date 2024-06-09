import { Button } from '@/app/lib/glassmorphic/button/Button';
import { PanelDescription } from '@/app/lib/glassmorphic/panel/PanelDescription';
import { PanelTitle } from '@/app/lib/glassmorphic/panel/PanelTitle';
import { Panel } from '../../lib/glassmorphic/panel/Panel';
import { CountdownText } from './lib/timer/CountdownText';

const OtpPage = () => {
	return (
		<div className='absolute inset-0 flex flex-col items-center justify-center p-[--padding]'>
			<Panel
				className='flex max-h-full w-full max-w-[400px] flex-col flex-wrap justify-center gap-10
					p-[--padding]'
			>
				<div className='flex flex-col items-center gap-1 text-center'>
					<PanelTitle className='mt-2 text-[2rem]'>
						We sent you a code
					</PanelTitle>
					<PanelDescription>
						Please enter the verification code sent to your Mobile
						Application.
					</PanelDescription>
				</div>
				<div className='flex w-full flex-grow flex-col justify-start gap-4'>
					<div className='flex flex-col gap-2'>
						<label htmlFor='login-username'>
							Verification Code
						</label>
						<Panel
							variant='inset'
							className='rounded-full'
						>
							<input
								id='login-username'
								type='text'
								placeholder='Type Here'
								className='h-10 w-full rounded-full bg-transparent px-4'
							/>
						</Panel>
					</div>
					<div className='flex items-center gap-2'>
						<span className='h4'>Send verification code again</span>
						<span>
							<CountdownText durationMs={60 * 1000} />
						</span>
					</div>
					<div className='flex w-full justify-center pt-4'>
						<Button
							variant='primary'
							href='/'
						>
							Authenticate
						</Button>
					</div>
				</div>
			</Panel>
		</div>
	);
};

export default OtpPage;
