import { useEffect, useRef, useState } from 'react';

export default function Item_9(props: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (open && contentRef.current) {
      const Height = contentRef.current.scrollHeight + 10;
      setMaxHeight(`${Height}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [open]);

  return (
    <div
      className={`relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white px-7 py-5 transition-all duration-300 ease-in-out`}
      onClick={() => setOpen(!open)}
    >
      <div className="z-20 flex items-center justify-between">
        <div className="text-[18px] font-semibold">{props.title}</div>
        <div className={`shrink-0 transform duration-300 ${open ? 'rotate-180' : 'rotate-0'} `}>
          <img
            className="cursor-pointer"
            src="/uploads/FrequentQuestions/arrow.svg"
            width={32}
            height={32}
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className={`transition-max-height overflow-hidden text-[16px] text-gray-700 transition-all duration-500 ease-in-out ${open ? 'pt-2.5' : 'pt-0'}`}
        style={{ maxHeight }}
      >
        {props.text}
      </div>
    </div>
  );
}
