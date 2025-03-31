import { getAssetUrl } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PropertiesCarouselItem = ({title,slug,thumbnail,type,listing_type,city,address}: Property) => {
  return (
    <Link href={`/nieruchomosci/${slug}`} className='w-full h-full flex flex-col justify-end items-end min-h-[700px] p-24'>
         { thumbnail && title && <Image src={getAssetUrl(thumbnail)} alt={title} fill className='w-full h-full object-cover' /> }
        <div className='absolute inset-0 w-full h-full  bg-black/40 z-10'></div>

        <div className='flex flex-col justify-end items-end gap-6 mt-12 px-6 text-center text-font-light z-20'>
            <p className='text-xl '>{type} | {listing_type} - {city}, {address}</p>
            <h2 className='text-5xl uppercase'>{title}</h2>
        </div>
    </Link>
  )
}

export default PropertiesCarouselItem