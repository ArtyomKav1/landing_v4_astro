// import arrow from "../../../public/uploads/arrow_purple.svg"
import { Btn_custom } from "../UI/Btn_custom.jsx";

export const Slide = (props) => {
  return (
    <>
      <div class="px-[48px] flex gap-[24px] h-[514px] items-center">
        <div class="flex flex-1 flex-col gap-[40px] pr-[48px]">
          <div class="flex flex-col gap-[16px]">
            <div class="text-[38px] text-[#0D0628] font-semibold leading-[46px]">
              {props.title}
            </div>
            <div class="text-[#4B485E] tesxt-[16px] leading-[24px]">
              {props.text}
            </div>
          </div>
          <div class="flex gap-[24px] items-center">
            <Btn_custom>Оставить заявку</Btn_custom>
            {props.main && (
              <div class="flex items-center gap-[6px] hover:gap-[12px] transition-all duration-300">
                <div class="text-[#8C26EA] text-[16px] font-semibold">
                  Кому подойдет сервис
                </div>
                <div class="mt-[3px] ">
                  <img
                    src="/uploads/arrow_purple.svg"
                    alt="error"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div class="flex-1">
          <img src={props.img} alt="error" />
        </div>
      </div>
    </>
  );
};
