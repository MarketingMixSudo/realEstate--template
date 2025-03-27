import { getAssetUrl } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

import { BlockHero } from '@/lib/schemas'

const Hero = ({ image, buttons, headline, content, preheading, movie } : BlockHero) => {
	return (
		<section className='relative w-full h-dvh flex justify-center items-center  overflow-hidden '>

			{image && <Image src={getAssetUrl(image)} alt='dasdsa' fill />}

			{movie && (
				<video
					className='absolute inset-0 w-full h-full object-cover'
					autoPlay
					muted
					loop
					playsInline
					poster='/assets/hero-poster.jpg'>
					<source src={getAssetUrl(movie)} type='video/mp4' />
				</video>
			)}

			<div className='absolute inset-0 w-full h-full bg-background-dark/20  z-10'></div>

			<div className=' flex flex-col justify-center items-center gap-6 z-20 mt-12 text-center px-3'>
				<span className='text-font-light z-10 uppercase text-sm'>{preheading}</span>
				<h1 className='text-white z-10 text-4xl sm:text-6xl font-light uppercase'>{headline}</h1>
				<span className='text-white z-10'>{content}</span>

				<div className='flex flex-wrap justify-center items-center gap-12 mt-6 sm:mt-12'>
					{buttons.map((button,index) => (
						<Button asChild key={`${button.label}-${index}`} variant={button.variant} className={button.variant === 'outline' ? 'border-white !text-font-light':'hover:border-white !text-font-light '}>
							<Link href={button.href}>{button.label}</Link>
						</Button>
					))}
				</div>
			</div>

			<a
				href='#hotel'
				className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-1 group'>
				<ChevronDown className='size-12 group-hover:text-primary-400 duration-300 ' />
			</a>
		</section>
	)
}

export default Hero
