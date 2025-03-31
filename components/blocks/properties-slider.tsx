'use client'

import PropertiesCarousel from '../properties-carousel'
import { SwiperSlide } from 'swiper/react'
import PropertiesCarouselItem from '../properties-carousel-item'

const PropertiesSlider = ({ properties }) => {
	return (
		<PropertiesCarousel>
			{properties.map((property) => (
				<SwiperSlide key={property.id}>
					<PropertiesCarouselItem {...property} />
				</SwiperSlide>
			))}
		</PropertiesCarousel>
	)
}

export default PropertiesSlider
