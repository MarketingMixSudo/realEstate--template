import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeadingText = (
	{ heading, heading_special, content, buttons, preheading }: BlockHeadingText,
	className?: string
) => {
	return (
		<section className={className}>
			<div className='flex flex-col justify-center items-center text-center max-w-screen-lg mx-auto gap-4'>
				{preheading && <span className='uppercase'> {preheading}</span>}
				<h2 className='text-4xl sm:text-5xl uppercase'>
					{heading}

					{heading_special && (
						<>
							<br /> <span className='text-primary-400'>{heading_special}</span>
						</>
					)}
				</h2>

				<div className='prose mt-4 text-left max-w-2xl' dangerouslySetInnerHTML={{ __html: content }} />

				{buttons && (
					<div className='flex flex-wrap justify-center items-center gap-12 mt-6'>
						{buttons.map((button, index) => (
							<Button asChild key={`${button.label}-${index}`} variant={button.variant}>
								<Link href={button.href}>{button.label}</Link>
							</Button>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default HeadingText
