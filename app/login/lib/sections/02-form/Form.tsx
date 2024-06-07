const WelcomeBack = () => {
	return (
		<>
			<div className='flex h-72 w-72 flex-col justify-start'>
				<h1 className='mb-3 text-left text-md font-semibold'>
					User ID
				</h1>
				<input
					className='mb-5 h-10 w-full rounded-full bg-black/20 p-3 pl-7 text-xs backdrop-blur'
					placeholder='Type Here'
				/>
				<h1 className='mb-3 text-left text-md font-semibold'>
					Password
				</h1>
				<input
					className='mb-3 h-10 w-full rounded-full bg-black/20 p-3 pl-7 text-xs backdrop-blur'
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
