import { useState } from "react";
import cn from "classnames";

export default function Item_9(props) {
  const [radion, setRadion] = useState(false);

  return (
    <div
      class={cn(
        " bg-[#FFFFFF]  px-[28px] py-[28px] gap-[12px] flex flex-col rounded-[16px] relative  overflow-hidden  transition-[height] delay-150 duration-500 ease-in-out ",
        { "h-[85px]": !radion },
        { "h-[160px]": radion },
      )}
      onClick={() => setRadion(!radion)}
    >
      <div class="flex justify-between items-center z-20">
        <div class="font-semibold text-[18px]">{props.title}</div>

        <div
          class={cn(
            "transform  duration-300  cursor-none",
            { "rotate-0 ": !radion },
            { "rotate-180": radion },
          )}
        >
          <img
            class="cursor-pointer"
            src="/block_9_arrow.svg"
            width={32}
            height={32}
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div
        class={cn(
          "transform delay-150  duration-300",
          { "opacity-0": !radion },
          { "opacity-1000": radion },
        )}
      >
        {props.text}
      </div>
    </div>
  );
}
