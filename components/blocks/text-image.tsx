import { cn, getAssetUrl } from '@/lib/utils'

import Image from 'next/image'


import LinkList from '@/components/link-list'

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
							<Image src={getAssetUrl(image)} alt='dasdsa' fill className='w-full h-full object-cover object-center' />
						)}
					</div>

					<div className='flex flex-col justify-start items-start gap-3 py-6'>
						<p className='preheading'>{preheading}</p>
						<h2 className='heading--small'>{heading}</h2>
						{text && <div className='prose-content  !max-w-xl' dangerouslySetInnerHTML={{ __html: text }} />}

						{links && <LinkList links={links} />}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TextImage
