'use client';
import { useField } from 'formik';
import { IMaskInput } from 'react-imask';

import { forwardRef } from 'react';
type PhoneInputProps = {
  name: string;
  placeholder: string;
};

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(({ name, placeholder }, ref) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className={`relative z-0 h-14 w-full overflow-hidden rounded-xl bg-[#B879F2] px-5`}>
      <IMaskInput
        mask="+7 (000) 000-00-00"
        value={field.value}
        name={name}
        inputRef={ref}
        placeholder=" "
        className="peer absolute bottom-[5px] block w-[88%] appearance-none rounded-[5px] border-black bg-transparent pt-2.5 text-[#FFFFFF] focus:ring-0 focus:outline-none"
        onAccept={(value: string) => {
          helpers.setValue(value);
        }}
        onBlur={() => helpers.setTouched(true)}
        overwrite
        lazy={false}
      />
      <div className="pointer-events-none absolute top-4 -z-10 -translate-y-4 scale-75 transform text-[#FFFFFF]/40 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-x-[15%] peer-focus:-translate-y-4 peer-focus:scale-75">
        {placeholder}
      </div>

      {meta.touched && !meta.error && (
        <div className="group">
          <img
            src="uploads/CallBackForm/check.png"
            width={10}
            height={10}
            className="absolute top-5 right-2.5 h-4 w-4 2xl:top-4 2xl:h-5 2xl:w-5"
            alt=""
          />
          <span className="pointer-events-none invisible absolute top-3 right-[50px] rounded-lg bg-green-500 px-2.5 py-[5px] text-[12px] text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-80">
            OK
          </span>
        </div>
      )}

      {meta.touched && meta.error && (
        <div className="group">
          <img
            src="uploads/CallBackForm/warning.png"
            width={10}
            height={10}
            className="absolute top-5 right-2.5 h-4 w-4 2xl:top-4 2xl:h-5 2xl:w-5"
            alt=""
          />
          <span className="pointer-events-none absolute top-3 right-[50px] rounded-lg bg-red-500 px-[15px] py-[5px] text-[12px] text-white opacity-0 transition-all duration-300 group-hover:opacity-80">
            {meta.error}
          </span>
        </div>
      )}
    </div>
  );
});

PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
