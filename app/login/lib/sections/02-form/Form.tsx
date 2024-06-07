const WelcomeBack = () => {
	return (
		<>
			<div className='flex h-72 w-full flex-col justify-start px-[60.5px]'>
				<h1 className='text-left text-lg font-medium leading-9'>
					User ID
				</h1>
				<input
					className='mb-5 h-10 w-full rounded-full bg-black/20 p-3 pl-7 text-lg text-white
						backdrop-blur'
					placeholder='Type Here'
				/>
				<h1 className='text-left text-lg font-medium leading-9'>
					Password
				</h1>
				<input
					className='mb-3 h-10 w-full rounded-full bg-black/20 p-3 pl-7 text-lg text-white
						backdrop-blur'
					placeholder='Type Here'
				/>
				<input
					type='radio'
					className='h-4 w-4 rounded-full bg-black/20 p-3 pl-7 backdrop-blur'
				/>
			</div>
		</>
	);
};

export default WelcomeBack;
