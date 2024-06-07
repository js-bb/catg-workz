import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { Button } from '@/app/lib/glassmorphic/button/Button';

const Verification = () => {
	return (
		<>
			<div className='flex w-full flex-grow flex-col justify-start gap-3 px-[60.5px]'>
				<h1 className='text-left text-md font-medium'>
					Verification Code
				</h1>
				<Panel variant='inset'>
					<input
						className='h-10 w-full rounded-full bg-black/20 p-3 text-md backdrop-blur'
						placeholder='Type Here'
					/>
				</Panel>

				<label className='inline-flex items-center gap-1.5'>
					<span className='text-base'>
						{' '}
						Send verification code again
					</span>
					<span className='text-base font-semibold'>00:56s</span>
				</label>
				<div className='flex justify-center p-6 pb-12'>
					<Button variant='primary'>
						<span className='inline-block text-base font-semibold'>
							Authenticate
						</span>
					</Button>
				</div>
			</div>
		</>
	);
};

export default Verification;
