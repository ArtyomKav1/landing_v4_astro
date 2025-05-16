import { useState } from "react";


export const Menu = () => {
    const [popup, setPopup] = useState(false)
    return (
        <div className="relative ">
            <div className="bg-[#FFFFFF]">
                <div
                    className="max-w-[1224px] mx-auto flex max-lg:justify-between px-[48px] gap-[64px] h-[80px] items-center"
                >
                    <div>
                        <img src="/header/Logo.svg" width="123" height="24" alt="error" />
                    </div>

                    <div
                        className="max-lg:hidden flex gap-[40px] text-[#0D0628] 
                        font-medium text-[15px] transition-colors [&>*]:duration-300 [&>*]:cursor-pointer"
                    >
                        <div className="hover:text-[#000000]/50"> Продукты</div>
                        <div className="hover:text-[#000000]/50"> События</div>
                        <div className="hover:text-[#000000]/50">Партнерам</div>
                        <div className="hover:text-[#000000]/50"> Карьера</div>
                        <div className="flex gap-[8px] transition-colors [&>*]:duration-300 [&>*]:cursor-pointer">
                            <div className="hover:text-[#000000]/50">Пресс-центр</div>
                            <img src="/header/arrow.svg" alt="error" />
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-[4px] lg:hidden [&>*]:w-[20px] [&>*]:h-[2px] [&>*]:bg-black"
                        onClick={() => setPopup(!popup)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/* -translate-x-[1000px] */}

            <div
                onClick={() => setPopup(!popup)}
                className={`fixed bg-purple-600 top-0 transition-all duration-300 z-50 w-screen h-screen  
                    ${popup ? "left-[0px] opacity-100" : "left-[-1000px] opacity-0"}`}
            ></div>
        </div>
    );
};
