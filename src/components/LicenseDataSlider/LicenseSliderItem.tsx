type SlideType = {
  img: string;
  title: string;
  limass: string[];
};

export const Slide = (props: SlideType) => {
  return (
    <>
      <div className="shrink-0 pt-5"></div>

      <div className="max-m:flex-col flex max-m:items-center">
        <div className="flex-1 max-m:mb-5">
          <img src={props.img} alt="" />
        </div>

        <div className="flex flex-1 flex-col gap-4 pl-8">
          <div className="text-[20px] leading-[29px] font-semibold text-[#0D0628]">
            {props.title}
          </div>

          <ul className="flex flex-col gap-1.5">
            {props.limass.map((item: string, index: number) => (
              <li key={index} className="relative flex items-start gap-3">
                <span className="relative top-2.5 left-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BE50FF]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
