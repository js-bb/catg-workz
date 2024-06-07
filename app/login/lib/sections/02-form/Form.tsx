const WelcomeBack = () => {
	return (
		<>
			<div className='mb-14 flex w-full flex-col justify-start px-[60.5px]'>
				<h1 className='text-left text-md font-medium leading-9'>
					User ID
				</h1>
				<input
					className='mb-5 h-10 w-full rounded-full bg-black/20 p-3 text-md backdrop-blur'
					placeholder='Type Here'
				/>
				<h1 className='text-left text-md font-medium leading-9'>
					Password
				</h1>
				<input
					className='mb-3 h-10 w-full rounded-full bg-black/20 p-3 text-md backdrop-blur'
					placeholder='Type Here'
				/>
				<label className='inline-flex items-center'>
					<input
						type='checkbox'
						className='h-[17px] w-[17px] appearance-none rounded-full p-3 backdrop-blur
							checked:bg-black/20'
					/>
					<span className='ml-2 text-xs leading-9'>
						{' '}
						Remember me on this device for 30 days
					</span>
				</label>
				<div className='flex justify-center'>
					<button
						className='mt-4 flex h-8 w-28 items-center justify-center gap-[0.125rem] rounded-full
							bg-[#0181FC] px-3 py-1.5'
					>
						<span className='inline-block text-xs font-semibold'>
							Login
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default WelcomeBack;
