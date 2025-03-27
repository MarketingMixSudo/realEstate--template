import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getAssetUrl } from '@/lib/utils'
import type { Metadata } from 'next'
import Hero from '@/components/blocks/hero'
import HeadingText from '@/components/blocks/heading-text'

const Home = async () => {
	const home = await directus.request(
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
								block_richtext: ['*'],
							},
						},
					],
				},
			],
		})
	)

	const properties = await directus.request(
		readItems('properties', {
			filter: { status: { _eq: 'published' } },
			sort: ['-sort'],
			fields: ['*'],
		})
	)

	console.log(home.blocks)

	return (
		<>
			{/* Mapowanie bloków */}
			<>
				{/* Mapowanie bloków */}
				{home?.blocks?.map((block, index) => (
					<>
						{block.collection === 'block_hero' && <Hero key={block.item.id} {...block.item} />}

						{block.collection === 'block_heading_and_text' && (
							<HeadingText
								key={block.item.id}
								{...block.item}
								className={index === 1 ? 'pt-20 py-12 px-4' : 'py-12 px-4'}
							/>
						)}
					</>
				))}
			</>

			{/* Sekcja z nieruchomościami */}
			<section className='grid grid-cols-4 px-20 gap-12 mt-12'>
				{properties.map(property => (
					<Link href={`/property/${property.slug}`} key={property.slug} className='border flex flex-col items-center'>
						<Image src={getAssetUrl(property.thumbnail)} alt={property.slug} width={300} height={300} />
						<div>
							<span>{property.type}</span>
							<br />
							<span>{property.listing_type}</span>
							<h3>{property.city}</h3>
							<h4>{property.address}</h4>
							<p>{property.short_description}</p>
							<p>{property.price}</p>
						</div>
					</Link>
				))}
			</section>
		</>
	)
}

export default Home
