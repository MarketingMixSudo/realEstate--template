import directus from '@/lib/directus'
import { getAssetUrl } from '@/lib/utils'
import { readItems } from '@directus/sdk'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PropertyCard from '../property-card'

const Properties = async ({
	preheading,
	heading,
	text,
	items_count,
	grid_columns,
	listing_type,
	selected_properties,
}) => {
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

	const properties =
		listing_type === 'latest'
			? await directus.request(
					readItems('properties', {
						filter: { status: { _eq: 'published' } },
						sort: [sortOrder],
						fields: ['*'],
						limit: items_count,
					})
			  )
			: selected_properties || []

	console.log(properties)

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
					{listing_type === 'latest' &&
						properties.map(property => (
              <PropertyCard key={property.slug} {...property} />
						))}

					{listing_type === 'custom' &&
						properties?.map(property => (
              <PropertyCard key={property.properties_id.slug} {...property.properties_id} />
							
						))}
				</div>
			</div>
		</section>
	)
}

export default Properties
