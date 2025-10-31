import type { ReactNode } from 'react';
type BtnCustomProps = {
  children: ReactNode;
};
export const BtnCustom = ({ children }: BtnCustomProps) => {
  return (
    <a href="#form">
      <button className="to-84 h-14 w-[190px] shrink-0 cursor-pointer rounded-xl bg-linear-to-r from-[#BE50FF] from-0% to-[#5F01D6] bg-size-[100%_100%] px-7 py-3 font-medium text-[#FFFFFF] transition-all duration-300 hover:to-100% hover:bg-size-[200%_100%]">
        {children}
      </button>
    </a>
  );
};
