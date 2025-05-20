// import { useState, useRef, useEffect } from "react";

import { useEffect, useRef, useState } from "react";

export default function Item_9(props: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (open && contentRef.current) {
      const Height = contentRef.current.scrollHeight + 10;
      setMaxHeight(`${Height}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  return (
    <div
      className={`bg-white px-[28px]  py-[20px]  flex flex-col rounded-[16px] relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center z-20">
        <div className="font-semibold text-[18px]">{props.title}</div>
        <div
          className={`transform duration-300 shrink-0 ${open ? "rotate-180" : "rotate-0"} `}
        >
          <img
            className="cursor-pointer "
            src="/block_9_arrow.svg"
            width={32}
            height={32}
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`transition-max-height duration-500 ease-in-out overflow-hidden text-[16px] text-gray-700 transition-all  ${open ? " pt-[10px]" : " pt-[0px]"}`}
        style={{ maxHeight }}
      >
        {props.text}
      </div>
    </div>
  );
}
