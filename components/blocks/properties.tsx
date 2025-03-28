import directus from '@/lib/directus'
import { getAssetUrl } from '@/lib/utils'
import { readItems } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Properties = async ({ preheading, heading, text, items_count, grid_columns, listing_type,selected_properties }) => {
	const sortOrder = (() => {
		switch (listing_type) {
			case 'latest':
				return '-date_created'
			case 'custom':
				return 'sort'
			default:
				return 'latest'
		}
	})()


	const properties = await directus.request(
		readItems('properties', {
			filter: { status: { _eq: 'published' } },
			sort: [sortOrder],
			fields: ['*'],
			limit: items_count,
		})
	)

	// Dynamiczna klasa CSS dla siatki
	let gridClass = 'grid gap-12'

	switch (grid_columns) {
		case 2:
			gridClass += ' grid-cols-2'
			break
		case 3:
			gridClass += ' grid-cols-3'
			break
		case 4:
			gridClass += ' grid-cols-4'
			break
		default:
			gridClass += ' grid-cols-3' // Domyślna wartość
	}

	return (
		<section className='py-12'>
			<div className='max-w-screen-2xl mx-auto'>
				<div className='flex flex-col justify-center items-center'>
					<span>{preheading}</span>
					<h2>{heading}</h2>
					<div className='prose mt-4 text-left max-w-2xl' dangerouslySetInnerHTML={{ __html: text }} />
				</div>

				<div className={gridClass}>



					{listing_type === 'latest' &&  properties.map(property => (
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

{listing_type === 'custom' &&  selected_properties?.map((property) => (
	
	
  <Link href={`/property/${property.properties_id.slug}`} key={property.properties_id.slug} className='border flex flex-col items-center'>
  <Image src={getAssetUrl(property.properties_id.thumbnail)} alt={property.properties_id.slug} width={300} height={300} />
  <div>
    <span>{property.properties_id.type}</span>
    <br />
    <span>{property.properties_id.listing_type}</span>
    <h3>{property.properties_id.city}</h3>
    <h4>{property.properties_id.address}</h4>
    <p>{property.properties_id.short_description}</p>
    <p>{property.properties_id.price}</p>
  </div>
</Link>
    ))}
				</div>
			</div>
		</section>
	)
}

export default Properties


