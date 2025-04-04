// completed

import Image from 'next/image'
import Link from 'next/link'

import { getAssetUrl } from '@/lib/utils'

import { Button } from '@/components/ui/button'

const HomeHero = ({
	hero_image,
	buttons,
	hero_preheading,
	hero_subheading,
	hero_heading,
	hero_movie,
	hero_poster,
	hero_type,
}: Home) => {
	

	return (
		<section className='relative flex justify-center items-center w-full h-dvh mb-10 overflow-hidden '>
			
			{hero_type === 'video' ? (
				<video
					className='absolute inset-0 w-full h-full object-cover'
					autoPlay
					muted
					loop
					playsInline
					poster={getAssetUrl(hero_poster)}
					preload='auto'>
					<source src={getAssetUrl(hero_movie)} type='video/mp4' />
				</video>
			) : <Image src={getAssetUrl(hero_image)} alt={hero_heading} fill priority className='object-cover object-center' />}

			{/* Overlay for text readability */}
			<div className='absolute inset-0 w-full h-full  bg-black/40 z-10'></div>

			{/* Content Section */}
			<div className='flex flex-col justify-center items-center gap-6 mt-12 px-6 text-center text-font-light z-20'>
				{hero_preheading && <span className='text-sm sm:text-lg uppercase'>{hero_preheading}</span>}
				<h1 className='text-4xl sm:text-6xl uppercase'>{hero_heading}</h1>
				{hero_subheading && <span className='text-sm sm:text-lg'>{hero_subheading}</span>}

				{/* Buttons Section */}
				{buttons && (
					<div className='flex flex-wrap justify-center items-center gap-4 sm:gap-12 mt-6 sm:mt-12'>
						{buttons.map((button, index) => (
							<Button
								asChild
								key={`${button.label}-${index}`}
								variant={button.variant}
								className={
									button.variant === 'outline' ? 'border-white !text-font-light' : button.variant === 'default' ? 'hover:border-white !text-font-light' : ''
								}>
								<Link href={button.href} aria-label={button.label}>
									{button.label}
								</Link>
							</Button>
						))}
					</div>
				)}
			</div>

			
		</section>
	)
}

export default HomeHero
