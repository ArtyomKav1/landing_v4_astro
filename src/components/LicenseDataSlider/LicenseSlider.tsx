import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slide } from './LicenseSliderItem';
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { slidesData } from './LicenseSlider.constants';



export const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="relative h-full">

      <div className="max-m:hidden flex items-center justify-between border-b-2 border-black/10">
        {slidesData.map((slide, ind) => (
          <div
            key={ind}
            onClick={() => swiperRef.current?.slideTo(ind)}
            className="w relative h-[70px] cursor-pointer overflow-hidden"
          >
            <div
              className={`w-[170px] pt-3 pb-[18px] text-center text-[14px] transition-all duration-300 ${
                ind === activeIndex ? 'text-[#8C26EA]' : 'text-[#5F5B70] hover:text-black'
              }`}
            >
              {slide.title}
            </div>
            <div
              className={`absolute top-[68px] h-0.5 w-[196px] bg-[#8C26EA]/50 transition-all duration-300 ${
                ind === activeIndex ? 'left-0' : 'left-[200px]'
              }`}
            ></div>
          </div>
        ))}
      </div>


      <div className="pt-[60px] max-lg:pt-0">
        <div className="pagination2 m:hidden"></div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            el: '.pagination2',
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Slide img={slide.img} title={slide.title} limass={slide.limass} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
