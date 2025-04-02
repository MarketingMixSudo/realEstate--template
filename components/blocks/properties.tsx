//completed

import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

import { cn } from '@/lib/utils'

import PropertyCard from '@/components/property-card'
import LinkList from '@/components/link-list'

const Properties = async ({
	preheading,
	heading,
	heading_special,
	text,
	items_count,
	grid_columns,
	listing_type,
	selected_properties,
	links,
	className,
}: BlockProperties & { className?: string }) => {
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
			? await directus.request<Property[]>(
					readItems('properties', {
						filter: { status: { _eq: 'published' } },
						sort: [sortOrder],
						fields: [
							'title',
							'slug',
							'thumbnail',
							'type',
							'listing_type',
							'city',
							'address',
							'price',
							'rooms_count',
							'property_surface',
						],
						limit: items_count,
					})
			  )
			: selected_properties || []

	let gridClass = 'grid gap-6 mt-12'

	switch (grid_columns) {
		case 2:
			gridClass += ' grid-cols-1 md:grid-cols-2'
			break
		case 3:
			gridClass += ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
			break
		case 4:
			gridClass += ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'
			break
		default:
			gridClass += ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
	}

	return (
		<section className={cn('section', className)}>
			<div className='wrapper !max-w-[1800px]'>
				<div className='flex flex-col justify-center items-center gap-4 max-w-screen-lg mx-auto text-center'>
					{preheading && <span className='uppercase text-sm'> {preheading}</span>}
					<h2 className='text-4xl sm:text-5xl uppercase '>
						{heading}

						{heading_special && (
							<>
								<br /> <span className='text-primary-400'>{heading_special}</span>
							</>
						)}
					</h2>

					<p className=' max-w-[800px] !text-lg leading-relaxed'>{text}</p>
				</div>

				<div className={gridClass}>
					{listing_type === 'latest' && properties.map(property => <PropertyCard key={property.slug} {...property} />)}

					{listing_type === 'custom' &&
						properties?.map(property => (
							<PropertyCard
								key={property?.properties_id?.slug || property?.slug}
								{...(property?.properties_id || property)}
							/>
						))}
				</div>

				{links && <LinkList links={links} className='pt-12' />}
			</div>
		</section>
	)
}

export default Properties
