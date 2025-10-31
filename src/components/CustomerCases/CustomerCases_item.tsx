type CustomerCasesItemProps = {
  img1: string;
  title: string;
  img2: string;
};

export const CustomerCasesItem = (props: CustomerCasesItemProps) => {
  return (
    <>
      <div className="group relative h-60 w-full">
        <img
          className="absolute z-10 h-full w-full rounded-[20px] object-cover"
          src={props.img1}
          alt="background"
        />
        <div className="to-100 absolute z-20 h-full w-full rounded-[20px] bg-linear-to-b from-[#000000]/70 from-10% to-transparent"></div>
        <div className="absolute inset-0 z-0 rounded-[28px] bg-purple-600/50 duration-300 group-hover:-inset-2"></div>
        <div className="absolute z-30 flex h-full w-full flex-col justify-between p-6">
          <div className="flex flex-col gap-2.5 text-white">
            <div className="text-[12px] leading-5 tracking-[3px] uppercase opacity-60">
              История успеха
            </div>
            <div className="text-[18px] leading-[26px] font-semibold">{props.title}</div>
          </div>
          <div>
            <img src={props.img2} alt="error" />
          </div>
        </div>
      </div>
    </>
  );
};
