'use client'

import { Swiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css/effect-fade';

interface CarouselProps {
  children: React.ReactNode;
}

const PropertiesCarousel = ({ children }: CarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className='relative w-full xl:w-[90%]  mx-auto '>
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper text-black'>
        {children}
      </Swiper>
    </div>
  );
};

export default PropertiesCarousel;