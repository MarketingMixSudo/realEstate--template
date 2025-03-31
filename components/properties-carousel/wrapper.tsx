import React from 'react'
import PropertiesSlider from '../blocks/properties-slider'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

const Wrapper = async ({ listing_type, selected_properties, type, items_count }: BlockProperties) => {
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

	const propertiesType = (() => {
		switch (type) {
			case 'all':
				return null
			case 'sell':
				return 'sell'
			case 'rent':
				return 'rent'
			default:
				return null
		}
	})()

	const filter = { status: { _eq: 'published' } }

	// Dodajemy warunek dla `type`, jeśli nie jest `null`
	if (propertiesType) {
		filter.listing_type = { _eq: propertiesType }
	}

	const properties =
		listing_type === 'latest'
			? await directus.request<Property[]>(
					readItems('properties', {
						filter,
						sort: [sortOrder],
						fields: ['*'],
						limit: items_count,
					})
			  )
			: selected_properties || []

	

	return (
		<div className='section'>
			{/* {listing_type === 'latest' && }
			{listing_type === 'custom' && <PropertiesSlider properties={properties} />} */}
			<PropertiesSlider properties={properties} listing_type={listing_type} />
		</div>
	)
}

export default Wrapper
