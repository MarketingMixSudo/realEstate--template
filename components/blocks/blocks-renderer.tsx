import HeadingText from '@/components/blocks/heading-text'
import TextImage from '@/components/blocks//text-image'
import Properties from '@/components/blocks//properties'
import BlogSection from '@/components/blocks/blog-section'

import PropertiesSliderWrapper from '@/components/properties-carousel/properties-slider-wrapper'

const BlocksRenderer = ({ blocks }: { blocks: Home['blocks'] }) => {
	let textImageIndex = 0

	return (
		<>
			{blocks.map((block, index) => {
				const isFirstBlock = index === 0
				const isLastBlock = index === blocks.length - 1
				const blockClass = `${isFirstBlock ? '!pt-20' : ''} ${isLastBlock ? '!pb-20' : ''}`

				if (block.collection === 'block_heading_and_text') {
					return <HeadingText key={block.item.id} {...block.item} className={blockClass} />
				}

				if (block.collection === 'block_text_image') {
					const reverse = textImageIndex % 2 !== 0
					textImageIndex++

					return <TextImage key={block.item.id} {...block.item} className={blockClass} reverse={reverse} />
				}

				if (block.collection === 'block_properties') {
					return <Properties key={block.item.id} {...block.item} className={blockClass} />
				}

				if (block.collection === 'block_blog_section') {
					return <BlogSection key={block.item.id} {...block.item} className={blockClass} />
				}
				if (block.collection === 'block_properties_slider') {
					return <PropertiesSliderWrapper key={block.item.id} {...block.item} />
				}
			})}
		</>
	)
}

export default BlocksRenderer
