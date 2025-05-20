import { useState } from "react";

export const Menu = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div className="relative ">
      <div className="bg-[#FFFFFF]">
        <div className="max-w-[1224px] mx-auto flex max-lg:justify-between px-[48px] gap-[64px] h-[80px] items-center">
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

      <div
        className={`fixed bg-[#0d0628] top-0 transition-all duration-300 z-50 w-screen h-screen  text-white  px-[48px] pt-[26px] flex flex-col gap-[40px] overflow-y-scroll 
                    ${popup ? "left-[0%] opacity-100" : "left-[-110%] "}`}
      >
        <div
          className="absolute right-[20px] top-[20px] w-[24px] h-[24px] cursor-pointer z-50"
          onClick={() => setPopup(false)}
        >
          <span className="block absolute w-[24px] h-[2px] bg-white rotate-45 top-[11px] left-0"></span>
          <span className="block absolute w-[24px] h-[2px] bg-white -rotate-45 top-[11px] left-0"></span>
        </div>
        <img src="/header/logo_yellow.svg" width="123" height="24" alt="" />

        <div className="flex flex-col gap-[15px]">
          <div>Продукты</div>
          <div>ИИ для юристов</div>
          <div>События</div>
          <div>Партнёрам</div>
          <div>Карьера</div>
          <div>Новости</div>
          <div>Для СМИ</div>
        </div>
        <div className="flex flex-col gap-[15px] opacity-80">
          <div>Документы</div>
          <div>Политика конфиденциальности</div>
          <div>Стандарт гарантийной поддержки системы</div>
          <div>8 800 700-02-01</div>
          <div>info@pravo.tech</div>
        </div>
        <div className="flex gap-[12px] [&>*]:h-[40px] [&>*]:w-[40px] [&>*]:bg-[#241e3c] [&>*]:rounded-[10px] [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:duration-300 [&>*]:cursor-pointer">
          <div>
            <img src="/header/tg.svg" alt="Telegram" className="" />
          </div>
          <div>
            <img src="/header/vk.svg" alt="VK" />
          </div>
          <div>
            {" "}
            <img src="/header/youtube.svg" alt="YouTube" />
          </div>
        </div>

        <div className="flex flex-col gap-[15px] pb-[50px]">
          <div> г. Москва, ул. Большая Полянка, 2/10с1</div>
          <div>©2025 ПравоТех</div>
        </div>
      </div>
    </div>
  );
};
