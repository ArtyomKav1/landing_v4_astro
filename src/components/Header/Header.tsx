import { useEffect, useRef, useState } from 'react';

export const Header = () => {
  const [popup, setPopup] = useState(false);
  const [pressCenterPopup, setPressCenterPopup] = useState(false);

  const pressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pressRef.current && !pressRef.current.contains(event.target as Node)) {
        setPressCenterPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const linksHeader = ['Продукты', 'События', 'Партнерам', 'Карьера'];
  const linksPopupTop = [
    'Продукты',
    'ИИ для юристов',
    'События',
    'Партнёрам',
    'Карьера',
    'Новости',
    'Для СМИ',
  ];
  const linksPopupBottom = [
    'Документы',
    'Политика конфиденциальности',
    'Стандарт гарантийной поддержки системы',
    '8 800 700-02-01',
    ' info@pravo.tech',
  ];

  return (
    <header className="relative">
      <div className="bg-[#FFFFFF]">
        <div className="mx-auto flex h-20 max-w-[1224px] items-center gap-16 px-12 max-lg:justify-between max-md:pl-5">
          <div>
            <img src="/uploads/Header/Logo.svg" width="123" height="24" alt="Logo" />
          </div>

          <div className="max-m:hidden flex gap-10 text-[15px] font-medium text-[#0D0628] transition-colors *:cursor-pointer *:duration-300">
            {linksHeader.map((item, index) => (
              <a
                key={index}
                href="https://ya.ru/?npr=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#000000]/50"
              >
                {item}
              </a>
            ))}
            <div
              className="relative flex gap-2 transition-colors *:cursor-pointer *:duration-300"
              onClick={() => setPressCenterPopup(!pressCenterPopup)}
              ref={pressRef}
            >
              <p className="whitespace-nowrap hover:text-[#000000]/50">Пресс-центр</p>
              <img
                src="uploads/Header/arrow.svg"
                className={`${pressCenterPopup ? 'rotate-180' : 'rotate-0'}`}
                alt="arrow"
              />
              {
                <div
                  className={`circle-schadow absolute top-[120%] left-0 z-100 flex h-18 w-40 flex-col rounded-xl bg-white transition-all duration-200 ${pressCenterPopup ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-10 opacity-0'}`}
                >
                  <a
                    href="https://ya.ru/?npr=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 hover:text-[#000000]/50"
                  >
                    Новости
                  </a>
                  <a
                    href="https://ya.ru/?npr=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 hover:text-[#000000]/50"
                  >
                    Для сми
                  </a>
                </div>
              }
            </div>
          </div>

          <div
            className="m:hidden flex cursor-pointer flex-col gap-1 *:h-0.5 *:w-5 *:bg-black"
            onClick={() => setPopup(!popup)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div
        className={`max-m:transition-all fixed top-0 z-50 flex h-screen w-screen flex-col gap-10 overflow-y-scroll bg-[#0d0628] px-12 pt-[26px] text-white duration-300 ${popup ? 'left-[0%] opacity-100' : 'left-[-110%] opacity-0'}`}
      >
        <div
          className="absolute top-5 right-5 z-50 h-6 w-6 cursor-pointer"
          onClick={() => setPopup(false)}
        >
          <span className="absolute top-[11px] left-0 block h-0.5 w-6 rotate-45 bg-white"></span>
          <span className="absolute top-[11px] left-0 block h-0.5 w-6 -rotate-45 bg-white"></span>
        </div>

        <img src="/uploads/Header/logo_yellow.svg" width="123" height="24" alt="" />

        <div className="flex flex-col gap-[15px]">
          {linksPopupTop.map((item, index) => (
            <a key={index} href="https://ya.ru/?npr=1" target="_blank" rel="noopener noreferrer">
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-[15px] opacity-80">
          {linksPopupBottom.map((item, index) => (
            <a key={index} href="https://ya.ru/?npr=1" target="_blank" rel="noopener noreferrer">
              {item}
            </a>
          ))}
        </div>

        <div className="flex gap-3 *:flex *:h-10 *:w-10 *:cursor-pointer *:items-center *:justify-center *:rounded-[10px] *:bg-[#241e3c] *:duration-300">
          <a href="https://ya.ru/?npr=1" target="_blank" rel="noopener noreferrer">
            <img src="/uploads/Header/tg.svg" alt="Telegram" />
          </a>
          <a href="https://ya.ru/?npr=1" target="_blank" rel="noopener noreferrer">
            <img src="/uploads/Header/vk.svg" alt="VK" />
          </a>
          <a href="https://ya.ru/?npr=1" target="_blank" rel="noopener noreferrer">
            <img src="/uploads/Header/youtube.svg" alt="YouTube" />
          </a>
        </div>

        <div className="flex flex-col gap-[15px] pb-[50px]">
          <p> г. Москва, ул. Большая Полянка, 2/10с1</p>
          <p>©2025 ПравоТех</p>
        </div>
      </div>
    </header>
  );
};
