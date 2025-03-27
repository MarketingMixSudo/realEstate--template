import { cn, getAssetUrl } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const TextImage = ({ className, image, preheading, heading, text, links,reverse }) => {
	console.log(image)

	return (
		<section className={cn('max-w-screen-2xl mx-auto px-6', className)}>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12'>
				<div className={`relative w-full h-full min-h-[350px] sm:min-h-[500px]  ${reverse ? 'order-1' : ''}`}>
					<Image src={getAssetUrl(image)} alt='dasdsa' layout='fill' objectFit='cover' className='w-full h-full ' />
				</div>

				<div className='flex flex-col justify-start items-start gap-3 py-6'>
					<p className='uppercase '>{preheading}</p>
					<h2 className='uppercase text-5xl font-light'>{heading}</h2>
					<div className='prose mt-4 text-left max-w-2xl' dangerouslySetInnerHTML={{ __html: text }} />

					{links && (
						<div className='flex gap-4 justify-center items-center pt-6'>
							{links.map((link, index) =>
								link.button ? (
									<Button asChild key={`${link.label}-${index}`} variant={link.variant}>
										<Link href={link.href}>{link.label}</Link>
									</Button>
								) : (
									<Link href={link.href} key={`${link.label}-${index}`} className=''>
										{link.label}
									</Link>
								)
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default TextImage
