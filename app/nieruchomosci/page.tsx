import BlocksRenderer from '@/components/blocks/blocks-renderer'
import Pagination from '@/components/pagination'
import PropertyCard from '@/components/property-card'
import SortSelector from '@/components/sort-selector'
import directus from '@/lib/directus'
import { aggregate, readItems } from '@directus/sdk'
import React from 'react'

const Properties = async ({ searchParams }) => {
    const sort = searchParams.sort || "-date_created";
    const page = parseInt(searchParams.page) || 1;
    const limit = 2;
    const offset = (page - 1) * limit;


     // Pobierz właściwości z Directus
  const properties = await directus.request<Property[]>(readItems("properties", {
    filter: { status: { _eq: "published" } },
    sort: [sort],
    fields: [
      "title", "slug", "thumbnail", "type", "listing_type", "city", 
      "address", "price", "rooms_count", "date_created", "property_surface"
    ],
    limit,
    offset,
  }));

  // Pobierz całkowitą liczbę elementów
  const getTotalPropertiesCount = async () => {
    const totalCount = await directus.request(
      aggregate("properties", {
        aggregate: { count: "*" },
      })
    );
    return totalCount[0].count;
  };

  const totalCount = await getTotalPropertiesCount();
  const totalPages = Math.ceil(totalCount / limit);

  let gridClass = "grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

	const body = await directus.request<Home>(
		readItems('page_properties_all', {
			status: { _eq: 'published' },
			fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: {
								block_hero_classic: ['*'],
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
			<BlocksRenderer blocks={body.blocks} />

			<section className='section '>
				<div className='wrapper !max-w-[1800px]'>
					<div className='flex justify-between items-center'>
						<span>Znaleźliśmy dla Ciebie {totalCount} ofert</span>
						<SortSelector />
					</div>

					<div className={gridClass}>
						{properties?.map(property => (
							<PropertyCard key={property?.slug} {...property} />
						))}
					</div>

                    <Pagination currentPage={page} totalPages={totalPages} />
				</div>
			</section>
		</>
	)
}

export default Properties
