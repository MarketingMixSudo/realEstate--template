import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getAssetUrl } from '@/lib/utils'
import type { Metadata } from 'next'
import Hero from '@/components/blocks/hero'
import HeadingText from '@/components/blocks/heading-text'
import TextImage from '@/components/blocks/text-image'



export async function generateMetadata(): Promise<Metadata | undefined> {
	const home = await directus.request(
		readItems('home', {
			fields: ['meta_title', 'meta_description','og_image'],
		})
	)

	const global = await directus.request(
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
			description:
				`${home.meta_description}`,
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
								block_text_image: ['*'],
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


	return (
		<>
			{/* Mapowanie bloków */}
			{home?.blocks?.map((block, index, arr) => {
  const isSecondBlock = index === 1;
  const isTextImage = block.collection === 'block_text_image';
  const previousBlock = arr[index - 1];
  const isPreviousTextImage = previousBlock?.collection === 'block_text_image';

  return (
    <>
      {block.collection === 'block_hero' && <Hero key={block.item.id} {...block.item} />}

      {block.collection === 'block_heading_and_text' && (
        <HeadingText
          key={block.item.id}
          {...block.item}
          className={isSecondBlock ? 'pt-20 py-12 px-4' : 'py-12 px-4'}
        />
      )}

      {isTextImage && (
        <TextImage
          key={block.item.id}
          {...block.item}
          className={isSecondBlock ? 'pt-20 py-12 px-4' : 'py-12 px-4'}
          reverse={isPreviousTextImage}
        />
      )}
    </>
  );
})}

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
