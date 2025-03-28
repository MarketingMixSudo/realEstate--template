import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { getAssetUrl } from '@/lib/utils'
import type { Metadata } from 'next'
import HeadingText from '@/components/blocks/heading-text'
import TextImage from '@/components/blocks/text-image'
import Properties from '@/components/blocks/properties'

import HomeHero from '@/components/home-hero'

export async function generateMetadata(): Promise<Metadata | undefined> {
	const home = await directus.request<Home>(
		readItems('home', {
			fields: ['meta_title', 'meta_description', 'og_image'],
		})
	)

	const global = await directus.request<Global>(
		readItems('global', {
			fields: ['name'],
		})
	)

	return {
		title: `${home.meta_title}`,
		description: `${home.meta_description}`,
		alternates: {
			canonical: process.env.NEXT_PULBIC_SITE_URL!,
		},
		openGraph: {
			title: `${home.meta_title}`,
			description: `${home.meta_description}`,
			type: 'website',
			locale: 'pl_PL',
			url: process.env.NEXT_PULBIC_SITE_URL!,
			siteName: `${global.name}`,
			images: [
				{
					url: getAssetUrl(home.og_image),
					width: 1200,
					height: 630,
					alt: `${home.meta_title}`,
				},
			],
		},
	}
}

const Home = async () => {
	const home = await directus.request<Home>(
		readItems('home', {
			fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: {
								block_hero: ['*'],
								block_heading_and_text: ['*'],
								block_text_image: ['*'],
								block_properties: ['*', 'selected_properties.properties_id.*'], // Załaduj dane dla properties_id
							},
						},
					],
				},
			],
		})
	)

	console.log(home.blocks)

	return (
		<>
			<HomeHero {...home} />

			{home.blocks.map((block, index) => {
				const isFirstBlock = index === 0
				const isLastBlock = index === home.blocks.length - 1
				const blockClass = `${isFirstBlock ? '!pt-20' : ''} ${isLastBlock ? '!pb-20' : ''}`

				if (block.collection === 'block_heading_and_text') {
					return <HeadingText key={block.item.id} {...block.item} className={blockClass} />
				}
			})}
		</>
	)
}

export default Home
