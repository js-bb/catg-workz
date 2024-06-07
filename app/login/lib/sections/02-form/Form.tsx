const WelcomeBack = () => {
	return (
		<>
			<div className='flex w-full flex-col justify-start gap-3 px-[60.5px]'>
				<h1 className='text-left text-md font-medium'>User ID</h1>
				<input
					className='h-10 w-full rounded-full bg-black/20 p-3 text-md backdrop-blur'
					placeholder='Type Here'
				/>
				<h1 className='pt-3.5 text-left text-md font-medium'>
					Password
				</h1>
				<input
					className='h-10 w-full rounded-full bg-black/20 p-3 text-md backdrop-blur'
					placeholder='Type Here'
				/>
				<label className='inline-flex items-center gap-1.5'>
					<input
						type='checkbox'
						className='h-5 w-5 appearance-none rounded-full border border-gray-400 backdrop-blur
							checked:bg-black/20'
					/>
					<span className='text-base'>
						{' '}
						Remember me on this device for 30 days
					</span>
				</label>
				<div className='flex justify-center p-6 pb-12'>
					<button
						className='flex h-8 w-28 items-center justify-center gap-[0.125rem] rounded-full
							bg-[#0181FC] px-3 py-1.5'
					>
						<span className='inline-block text-base font-semibold'>
							Login
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default WelcomeBack;
