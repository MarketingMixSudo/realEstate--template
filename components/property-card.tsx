import { getAssetUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'


const PropertyCard = ({slug,thumbnail,title,city,address,type,listing_type,price}) => {
	return (
		<Link href={`/property/${slug}`}  className='border'>
			<Image
				src={getAssetUrl(thumbnail)}
				alt={title}
				width={300}
				height={300}
				className='w-full aspect-[3/2] object-cover object-center'
			/>
			<div className='bg-primary-400 text-white flex flex-col justify-center items-center text-center'>
				<span>
					{city}, {address}
				</span>
				<h3 className='text-2xl line-clamp-1'> {title}</h3>
				<span>
					{type} | {listing_type}
				</span>

				<span> {price} PLN</span>
			</div>
		</Link>
	)
}

export default PropertyCard
