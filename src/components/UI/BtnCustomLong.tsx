export const BtnCustomLong = () => {
  return (
    <a href="#form" className="cursor-pointer">
      <div className="h-[104px] transform rounded-[20px] bg-[#8C26EA]/40 px-6 duration-300 hover:bg-[#8C26EA]/30  max-lg:px-4">
        <div className="h-[104px] transform rounded-[20px] bg-[#8C26EA]/30 px-6 duration-300 hover:bg-[#8C26EA]/20 max-lg:px-4">
          <div className="flex h-[104px] transform items-center justify-between rounded-[20px] bg-[#8C26EA]/80 px-6 text-[16px] font-medium text-[#FFFFFF] duration-300  max-lg:text-[14px] max-md:text-[16px] max-sm:text-[12px]">
            <div className="w-[70%]">Технические преимущества сервиса PravoTech Big Data</div>

            <div className="shrink-0">
              <img src="/uploads/UI/arrow_button.svg" alt="error" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
