import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "./Slide";

export const Slider = () => {
  return (
    <>
      <div className="relative h-full">
        <div className=" swiper-button-prev transition-colors duration-300 hover:bg-white rounded-full max-lg:hidden"></div>
        <div className="swiper-button-next transition-colors duration-300 hover:bg-white rounded-full max-lg:hidden"></div>
        <div className="pagination"></div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".pagination",
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Slide
              img={"/uploads/swith/img1.svg"}
              text={
                "Интеграция данных из 50+ источников в вашу систему для решения бизнес-задач: от быстрой оценки заемщиков до мониторинга судебных дел."
              }
              title={"Автоматизируйте поиск и анализ данных"}
              main={true}
              soon={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              img={"/uploads/swith/img2.svg"}
              text={
                "Настройте качественную модель оценки рисков по физическим лицам и компаниям и быстро проводите предиктивный анализ дефолта."
              }
              title={"Риск-менеджеры"}
              main={false}
              soon={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              img={"/uploads/swith/img3.svg"}
              text={
                "Вовремя принимайте меры по взысканию долга, быстро оценивайте проблемные активы компаний и эффективно работайте с процедурой банкротства должника."
              }
              title={"Специалисты по работе с проблемными активами"}
              main={false}
              soon={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              img={"/uploads/swith/img4.svg"}
              text={
                "Контролируйте процессуальные события, автоматизируйте учет судебных дел и составляйте отчеты за пару минут прямо в вашей системе."
              }
              title={"Юристы"}
              main={false}
              soon={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              img={"/uploads/swith/img5.svg"}
              text={
                "Быстро проверяйте сотрудников и контрагентов и минимизируйте риски возникновения фрода в вашей компании."
              }
              title={"Специалисты службы безопасности"}
              main={false}
              soon={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              img={"/uploads/swith/img6.svg"}
              text={
                "Интегрируйте качественные данные в любые внутренние системы для повышения эффективности бизнес-процессов и роста качества аналитики."
              }
              title={"Бизнес-заказчики"}
              main={false}
              soon={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              img={"/uploads/swith/img7.svg"}
              text={
                "Интегрируйте лицензионные данные в удобном формате, выгружайте большой объем данных за секунды и получайте всю информацию по защищенному HTTPS-протоколу."
              }
              title={"Разработчики"}
              main={false}
              soon={false}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
