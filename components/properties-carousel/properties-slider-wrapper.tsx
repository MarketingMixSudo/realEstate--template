import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import PropertiesSlider from '@/components/blocks/properties-slider'

const PropertiesSliderWrapper = async ({ listing_type, selected_properties, type, items_count }: BlockPropertiesSlider) => {
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

	const filter = {
		status: { _eq: 'published' },
		...(propertiesType ? { listing_type: { _eq: propertiesType } } : {}),
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
		<section className='section'>
			<PropertiesSlider properties={properties} listing_type={listing_type} />
		</section>
	)
}

export default PropertiesSliderWrapper
