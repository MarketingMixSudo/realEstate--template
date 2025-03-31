//completed

import { getAssetUrl } from '@/lib/utils'

import Image from 'next/image'
import Link from 'next/link'

const PropertyCard = ({
	slug,
	thumbnail,
	title,
	city,
	address,
	type,
	listing_type,
	price,
	rooms_count,
	property_surface,
}: Property) => {
	return (
		<Link href={`/property/${slug}`} className='shadow-lg duration-150 hover:-translate-y-1  hover:shadow-xl'>
			{thumbnail && title && (
				<Image
					src={getAssetUrl(thumbnail)}
					alt={title}
					width={420}
					height={280}
					className='w-full aspect-[3/2] object-cover object-center'
				/>
			)}

			<div className='bg-primary-400 text-white flex flex-col justify-center items-center text-center px-3 py-6 gap-2'>
				<span className='text-sm'>
					{city}, {address}
				</span>
				<h3 className='text-2xl line-clamp-1'> {title}</h3>

				<span className='text-sm'>
					{type && <span>{type} | </span>}
					{listing_type && <span>{listing_type} | </span>}
					{rooms_count && (
						<span>
							{rooms_count} {rooms_count === 1 ? 'pokój' : rooms_count > 1 && rooms_count < 5 ? 'pokoje' : 'pokoi'} |
						</span>
					)}
					{property_surface && <span>{property_surface} m²</span>}
				</span>
				<span className='font-semibold '> {price} PLN</span>
			</div>
		</Link>
	)
}

export default PropertyCard
