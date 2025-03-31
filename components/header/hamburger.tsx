// completed


const Hmburger = () => {
	return (
		<div className='flex flex-col gap-[8px] w-[50px] group p-2 cursor-pointer'>
			<span className='w-full h-[2px] bg-white group-hover:bg-primary-400 duration-300 '></span>
			<span className='w-full h-[2px]  bg-white group-hover:bg-primary-400 duration-300 origin-right transform group-hover:scale-x-75'></span>
			<span className='w-full h-[2px]  bg-white group-hover:bg-primary-400 duration-300 origin-right transform group-hover:scale-x-50'></span>
		</div>
	)
}

export default Hmburger