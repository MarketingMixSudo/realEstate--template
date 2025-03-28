import { cn, getAssetUrl } from '@/lib/utils'

import Image from 'next/image'


import LinkList from '../link-list'

const TextImage = ({
	image,
	preheading,
	heading,
	text,
	links,
	reverse,
	className,
}: BlockTextImage & { className?: string }) => {
	return (
		<section className={cn('section', className)}>
			<div className='wrapper'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16'>
					<div className={`relative w-full h-full min-h-[350px] sm:min-h-[500px]  ${reverse ? 'order-1' : ''}`}>
						{image && (
							<Image src={getAssetUrl(image)} alt='dasdsa' layout='fill' objectFit='cover' className='w-full h-full ' />
						)}
					</div>

					<div className='flex flex-col justify-start items-start gap-3 py-6'>
						<p className='uppercase text-sm'>{preheading}</p>
						<h2 className='text-3xl sm:text-4xl uppercase'>{heading}</h2>
						{text && <div className='prose-content  !max-w-xl' dangerouslySetInnerHTML={{ __html: text }} />}

						{links && <LinkList links={links} />}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TextImage
