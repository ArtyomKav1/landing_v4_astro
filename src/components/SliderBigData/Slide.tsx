import { BtnCustom } from '@components/UI/BtnCustom';

export const Slide = (props: {
  title: string;
  text: string;
  img: string;
  main: boolean;
  soon: boolean;
}) => {
  return (
    <>
      <div className="max-m:flex-col-reverse flex items-center gap-6 px-12 max-sm:h-[600px] max-sm:gap-0 max-sm:px-5">
        <div className="m:w-[500px] m:shrink-0 flex flex-col gap-10 overflow-hidden pr-12 max-md:gap-[15px]">
          <div className="flex flex-col gap-4">
            <div className="text-[38px] leading-[46px] font-semibold text-[#0D0628] max-sm:text-[24px] max-sm:leading-6">
              {props.title}
            </div>
            <div className="text-[16px] leading-6 text-[#4B485E] max-sm:text-[12px] max-sm:leading-[18px]">
              {props.text}
            </div>
          </div>
          <div className="flex items-center">
            <BtnCustom>Оставить заявку</BtnCustom>
          </div>
        </div>
        <div className="m:shrink-0">
          <img src={props.img} alt="error" />
        </div>
      </div>
    </>
  );
};
