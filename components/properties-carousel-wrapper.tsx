import React from 'react'
import PropertiesSlider from './blocks/properties-slider'
import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

const PropertiesCarouselWrapper = async ({listing_type, selected_properties}: BlockProperties) => {
  // const sortOrder = (() => {
	// 	switch (listing_type) {
	// 		case 'latest':
	// 			return '-date_created'
	// 		case 'custom':
	// 			return 'sort'
	// 		default:
	// 			return 'latest'
	// 	}
	// })()

	const properties =
		listing_type === 'latest'
			? await directus.request<Property[]>(
					readItems('properties', {
						filter: { status: { _eq: 'published' } },
						sort: ['-date_created'],
						fields: ['*'],
						limit: 4,
					})
			  )
			: selected_properties || []


      console.log(properties)

  return (
   <PropertiesSlider properties={properties} />
  )
}

export default PropertiesCarouselWrapper