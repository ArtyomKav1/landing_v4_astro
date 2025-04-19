export const Slide = (props) => {
  return (
    <>
      <div class="pt-[20px] flex-shrink-0"></div>

      <div class="flex ">
        <div class="flex-1">
          <img src={props.img} alt="" />
        </div>

        <div class="pl-[32px] flex flex-col gap-[16px] flex-1">
          <div class="text-[#0D0628] text-[20px] font-semibold leading-[29px]">
            {props.title}
          </div>

          <ul class="flex flex-col gap-[6px]">
            {props.limass.map((item, index) => (
              <li key={index} class="flex gap-[12px]">
                <img
                  src="/uploads/Block_5/block_5_point.svg"
                  alt=""
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
