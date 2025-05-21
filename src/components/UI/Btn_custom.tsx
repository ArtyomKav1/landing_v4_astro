import type { ReactNode } from "react";
type BtnCustomProps = {
  children: ReactNode;
};
export const Btn_custom = ({ children }: BtnCustomProps) => {
  return (
    <a href="#form">
      <button
        className="text-[#FFFFFF] bg-gradient-to-r from-[#BE50FF] from-0% to-[#5F01D6] to-84  cursor-pointer
          font-medium h-[56px] px-[28px] rounded-[12px] py-[12px] w-[190px] shrink-0 hover:to-100% bg-[length:100%_100%] hover:bg-[length:200%_100%] transition-all duration-300"
      >
        {children}
      </button>
    </a>
  );
};
