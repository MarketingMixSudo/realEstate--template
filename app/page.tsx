import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { getAssetUrl } from '@/lib/utils'
import type { Metadata } from 'next'

import HomeHero from '@/components/home-hero'
import BlocksRenderer from '@/components/blocks/blocks-renderer'

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
								
							
								block_heading_and_text: ['*'],
								block_text_image: ['*'],
								block_properties: ['*', 'selected_properties.properties_id.*'],
								block_properties_slider: ['*', 'selected_properties.properties_id.*'],
								block_blog_section: ['*'],
							},
						},
					],
				},
			],
		})
	)

	

	return (
		<>



			<HomeHero {...home} />
			<BlocksRenderer blocks={home.blocks} />
		</>
	)
}

export default Home
