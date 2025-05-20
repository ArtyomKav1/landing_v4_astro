import { Btn_custom } from "../UI/Btn_custom.js";
export const Slide = (props: {
  title: string;
  text: string;
  img: string;
  main: boolean;
  soon: boolean;
}) => {
  return (
    <>
      <div className="px-[48px] max-sm:px-[20px] max-sm:h-[600px]  max-m:flex-col-reverse flex gap-[24px] max-sm:gap-[0px] items-center">
        <div className="flex m:w-[500px] m:shrink-0 flex-col gap-[40px] max-md:gap-[15px] pr-[48px] overflow-hidden">
          <div className="flex flex-col gap-[16px]">
            <div className=" text-[38px] max-sm:text-[24px]  leading-[46px] max-sm:leading-[24px] text-[#0D0628] font-semibold ">
              {props.title}
            </div>
            <div className="text-[#4B485E]  text-[16px] max-sm:text-[12px] leading-[24px] max-sm:leading-[18px]">
              {props.text}
            </div>
          </div>
          <div className="flex items-center">
            <Btn_custom>Оставить заявку</Btn_custom>
          </div>
        </div>
        <div className=" m:shrink-0 ">
          <img src={props.img} alt="error" />
        </div>
      </div>
    </>
  );
};

{
  /* {props.main && (
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
            )} */
}
