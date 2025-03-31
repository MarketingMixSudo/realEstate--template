'use client'

import PropertiesCarousel from '../properties-carousel'
import { SwiperSlide } from 'swiper/react'
import PropertiesCarouselItem from '../properties-carousel-item'

const PropertiesSlider = ({ properties, listing_type }) => {
	

	return (
		<PropertiesCarousel>
			{listing_type === 'latest' &&
				properties.map(property => (
					<SwiperSlide key={property.id}>
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
