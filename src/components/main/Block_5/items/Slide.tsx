type SlideType = {
  img: string;
  title: string;
  limass: string[];
};

export const Slide = (props: SlideType) => {
  return (
    <>
      <div className="pt-[20px] flex-shrink-0"></div>

      <div className="flex max-m:flex-col">
        <div className="flex-1">
          <img src={props.img} alt="" />
        </div>

        <div className="pl-[32px] flex flex-col gap-[16px] flex-1">
          <div className="text-[#0D0628] text-[20px] font-semibold leading-[29px]">
            {props.title}
          </div>

          <ul className="flex flex-col gap-[6px]">
            {props.limass.map((item: string, index: number) => (
              <li key={index} className="flex gap-[12px] items-start">
                <img src="/uploads/Block_5/block_5_point.svg" alt="dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
