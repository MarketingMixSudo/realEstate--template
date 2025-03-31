import Image from 'next/image'
import Link from 'next/link'

import { getAssetUrl } from '@/lib/utils'

const PropertiesCarouselItem = ({title,slug,thumbnail,type,listing_type,city,address}: Property) => {
  return (
    <Link href={`/nieruchomosci/${slug}`} className='w-full h-full flex flex-col justify-end items-end min-h-[500px] xl:min-h-[750px] xl:pr-16 pb-12'>
         { thumbnail && title && <Image src={getAssetUrl(thumbnail)} alt={title} fill className='w-full h-full object-cover' /> }
        <div className='absolute inset-0 w-full h-full  bg-black/30 z-10'></div>

        <div className='flex flex-col justify-end items-end gap-6 mt-12 px-6 text-end text-font-light z-20'>
            <p className='sm:text-lg lg:text-xl '>{type} | {listing_type} - {city}, {address}</p>
            <h2 className='text-2xl sm:text-3xl lg:text-5xl uppercase pb-1 '>{title}</h2>
        </div>
    </Link>
  )
}

export default PropertiesCarouselItem