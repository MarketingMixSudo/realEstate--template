'use client'

import { cn } from '@/lib/utils'

import { ChevronDown } from 'lucide-react'

const ScrollButton = ({ className }: { className?: string }) => {
	const scrollToNextSection = () => {
		window.scrollBy({
			top: 0.95 * window.innerHeight,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<button
				className={cn(
					' absolute bottom-12 left-1/2 -translate-x-1/2 flex justify-center items-center gap-1  p-1 border border-white rounded-full animate-pulse  cursor-pointer  group   duration-150 hover:translate-y-1 z-20 ',
					className
				)}
				onClick={scrollToNextSection} aria-label='przewiń'>
				<ChevronDown className='size-12 stroke-1  text-font-light  duration-300' />
			</button>
		</>
	)
}

export default ScrollButton
