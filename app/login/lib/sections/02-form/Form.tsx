import { Panel } from '@/app/lib/glassmorphic/panel/Panel';
import { Button } from '@/app/lib/glassmorphic/button/Button';

export const Form = () => {
	return (
		<>
			<div className='flex w-full flex-grow flex-col justify-start gap-3 px-[60.5px]'>
				<h1 className='text-left text-md font-medium'>User ID</h1>
				<Panel variant='inset'>
					<input
						className='h-10 w-full rounded-full bg-black/20 p-3 text-md backdrop-blur'
						placeholder='Type Here'
					/>
				</Panel>
				<h1 className='pt-3.5 text-left text-md font-medium'>
					Password
				</h1>
				<Panel variant='inset'>
					<input
						className='h-10 w-full rounded-full bg-black/20 p-3 text-md backdrop-blur'
						placeholder='Type Here'
					/>
				</Panel>
				<label className='inline-flex items-center gap-1.5'>
					<input
						type='checkbox'
						className='h-5 w-5 appearance-none rounded-full border border-gray-400 bg-black/40
							checked:bg-black/20'
					/>

					<span className='text-base'>
						{' '}
						Remember me on this device for 30 days
					</span>
				</label>
				<div className='flex justify-center p-6 pb-12'>
					<Button variant='primary'>
						<span className='inline-block text-base font-semibold'>
							Login
						</span>
					</Button>
				</div>
			</div>
		</>
	);
};
