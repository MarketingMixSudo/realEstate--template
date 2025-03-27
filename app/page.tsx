import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getAssetUrl } from '@/lib/utils'
import type { Metadata } from 'next'
import Hero from '@/components/blocks/hero'



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
			{home?.blocks?.map((block, index) => (
				<div key={index}>
          {block.collection === 'block_hero' && <Hero {...block.item} />}
          {block.collection === 'block_heading_and_text' && 
          
          <div className='flex flex-col justify-center items-center text-center'>
            <h2 className='text-4xl'>{block.item.heading} <span className='text-blue-500'>{block.item.heading_special}</span></h2>
            <p>{block.item.content}</p>


            {block.item.buttons && block.item.buttons.map(button => (
				<button className='border px-12 py-6 text-black z-10'>{button.label}</button>
			))}
             </div>
          
          }
          
          
          </div>
			))}

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
