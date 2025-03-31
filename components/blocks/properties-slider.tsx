'use client'

import PropertiesCarousel from '@/components/properties-carousel/properties-carousel'
import PropertiesCarouselItem from '@/components/properties-carousel/properties-carousel-item'

import { SwiperSlide } from 'swiper/react'

const PropertiesSlider = ({
	properties,
	listing_type,
}: {
	properties: Property[]
	listing_type: 'latest' | 'custom' | undefined
}) => {
	return (
		<PropertiesCarousel>
			{listing_type === 'latest' &&
				properties.map(property => (
					<SwiperSlide key={property.slug}>
						<PropertiesCarouselItem {...property} />
					</SwiperSlide>
				))}

			{listing_type === 'custom' &&
				properties?.map(property => (
					<SwiperSlide key={property?.properties_id?.slug || property?.slug}>
						<PropertiesCarouselItem {...(property?.properties_id || property)} />
					</SwiperSlide>
				))}

		</PropertiesCarousel>
	)
}

export default PropertiesSlider
