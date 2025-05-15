import { Btn_custom } from "../UI/Btn_custom.js";
export const Slide = (props: { title: string, text: string, img: string, main: boolean, soon: boolean, }) => {
  return (
    <>
      <div className="px-[48px] flex gap-[24px] h-[514px] items-center">
        <div className="flex flex-1 flex-col gap-[40px] pr-[48px]">
          <div className="flex flex-col gap-[16px]">
            <div className="text-[38px] text-[#0D0628] font-semibold leading-[46px]">
              {props.title}
            </div>
            <div className="text-[#4B485E] tesxt-[16px] leading-[24px]">
              {props.text}
            </div>
          </div>
          <div className="flex gap-[24px] items-center">
            <Btn_custom>Оставить заявку</Btn_custom>
            {props.main && (
              <div className="flex items-center gap-[6px] hover:gap-[12px] transition-all duration-300">
                <div className="text-[#8C26EA] text-[16px] font-semibold">
                  Кому подойдет сервис
                </div>
                <div className="mt-[3px] ">
                  <img
                    src="/uploads/arrow_purple.svg"
                    alt="error"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <img src={props.img} alt="error" />
        </div>
      </div>
    </>
  );
};
