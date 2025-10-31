import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Slide } from './Slide';
import { slidesData } from './SliderBigData.constants';

export const Slider = () => {
  return (
    <div className="relative h-full">
      <div className="swiper-button-prev rounded-full transition-colors duration-300 hover:bg-white max-lg:hidden"></div>
      <div className="swiper-button-next rounded-full transition-colors duration-300 hover:bg-white max-lg:hidden"></div>
      <div className="pagination"></div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.pagination',
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              img={slide.img}
              title={slide.title}
              text={slide.text}
              main={slide.main}
              soon={slide.soon}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
