import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Slide } from "./Slide";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
const limass = [
  [
    "Участие в арбитражных делах и делах судов общей юрисдикции",
    "Предиктивная аналитика дефолта и банкротства на основе судебных данных",
    "Информация о банкротстве с момента подачи заявления",
    "Базовая информация: ЕГРЮЛ/ЕГРИП, ФНС, ФССП",
    "Исполнительные производства и обременения",
    "Залоги и лизинг, заблокированные счета",
    "Включение в санкционные списки и РНП",
    "Аффилированность с другими компаниями",
    "Соблюдение ковенант",
    "Другие данные по компаниям",
  ],
  [
    "Наличие статуса самозанятого",
    "Розыск МВД, ФСИН и ФССП",
    "Участие в судебных делах и наличие долгов",
    "Аресты имущества и обременения на имущество",
    "Банкротство должника-физического лица",
    "Смерть физического лица / Закрытие ИП",
    "Прекращение бизнеса, нахождение в РДЛ",
    "Нахождение в списках Росфинмониторинга",
    "Привлечение к субсидиарной ответственности",
    "Другие данные о физических лицах",
  ],
  [
    "Сведения о банкротстве с момента подачи искового заявления",
    "Сведения о должниках, чьи заявления были признаны судом необоснованными",
    "Проверка ранее поданных заявлений о признании должника банкротом",
    "Данные о расходных операциях должников-физических лиц в преддверии банкротства",
    "Другие данные о банкротстве",
  ],
  [
    "Значительное увеличение исковой нагрузки",
    "Компания внесена в РНП или в список экстремистских организаций",
    "Риски бухгалтерской отчетности",
    "Частая смена руководителя",
    "Компания — банкрот или в процессе банкротства",
    "Намерение обратиться в суд с заявлением о банкротстве",
    "Санкционные риски",
    "Другие факторы риска",
  ],
];

const titleMass = [
  "Проверка юридических лиц",
  "Проверка физических лиц",
  "Судебное и внесудебное банкротство",
  "Готовые факторы риска",
];

export const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <>
      <div className="relative h-full">
        <div className="flex justify-between items-center border-b-[2px] border-black/10 max-m:hidden">
          {titleMass.map((item, ind) => (
            <div
              key={ind}
              onClick={() => swiperRef.current?.slideTo(ind)}
              className="relative overflow-hidden h-[70px]  cursor-pointer w"
            >
              <div
                className={`pt-[12px] w-[170px] pb-[18px] transition-all duration-300  text-[14px]   text-center ${ind === activeIndex && "text-[#8C26EA]"} ${ind !== activeIndex && "text-[#5F5B70] hover:text-black "}`}
              >
                {item}
              </div>
              <div
                className={`absolute w-[196px] bg-[#8C26EA]/50 h-[2px] top-[68px] transition-all duration-300   ${ind === activeIndex && " left-[0px]"} ${ind !== activeIndex && "left-[200px]"}`}
              ></div>
            </div>
          ))}
        </div>

        <div className="pt-[60px] max-lg:pt-[0px]">
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
              el: ".pagination2",

              clickable: true,
            }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Slide
                img={"/uploads/Block_5/img1.svg"}
                title={"Проверка юридических лиц"}
                limass={limass[0]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img={"/uploads/Block_5/img2.svg"}
                title={"Проверка физических лиц"}
                limass={limass[1]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img={"/uploads/Block_5/img3.svg"}
                title={"Судебное и внесудебное банкротство"}
                limass={limass[2]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img={"/uploads/Block_5/img4.svg"}
                title={"Готовые факторы риска"}
                limass={limass[3]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
{
  /* <div class={`px-[16px] pt-[12px] pb-[18px] text-[#5F5B70] text-[14px] text-center`}>
              "Проверка <br /> юридических лиц"
            </div>
            <div class={`px-[16px] pt-[12px] pb-[18px] text-[#5F5B70] text-[14px] text-center`}>
              Проверка <br /> физических лиц
            </div>
            <div class={`px-[16px] pt-[12px] pb-[18px] text-[#5F5B70] text-[14px] text-center`}>
              Судебное и внесудебное <br /> банкротство
            </div>
            <div class={`px-[16px] pt-[12px] pb-[18px] text-[#5F5B70] text-[14px] text-center`}>
              Готовые <br /> факторы риска
            </div> */
}
