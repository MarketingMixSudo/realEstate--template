// completed

import { cn } from '@/lib/utils'

import LinkList from '@/components/link-list'

const HeadingText = ({
	heading,
	heading_special,
	content,
	links,
	preheading,
	className,
}: BlockHeadingText & { className?: string }) => {
	return (
		<section className={cn('section', className)}>
			<div className='wrapper'>
				<div className='flex flex-col justify-center items-center text-center gap-4 max-w-screen-lg mx-auto'>
					{preheading && <span className='preheading'> {preheading}</span>}
					<h2 className='heading'>
						{heading}

						{heading_special && (
							<>
								<br /> <span className='heading--special'>{heading_special}</span>
							</>
						)}
					</h2>

					{content && <div className='prose-content !max-w-2xl ' dangerouslySetInnerHTML={{ __html: content }} />}

					{links && <LinkList links={links} />}
				</div>
			</div>
		</section>
	)
}

export default HeadingText
