'use client';
import { Field, ErrorMessage as Error, useField } from 'formik';

type ItemCheckBoxProps = {
  name: string;
};

export const ItemCheckBox = (props: ItemCheckBoxProps) => {
  const [field] = useField(props.name);
  return (
    <>
      <div className="relative inline-flex items-center">
        <Field
          className="peer absolute block h-[30px] w-[30px] appearance-none rounded-[5px] border-black bg-transparent pt-2.5 text-[#FFFFFF] focus:ring-0 focus:outline-none"
          type="checkbox"
          name={props.name}
        />
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FEFEFE]/10">
          {field.value && <div className="h-3.5 w-3.5 rounded-full bg-white/50" />}
        </div>
        <div className="ml-2 cursor-pointer text-[14px] text-white">
          <p>
            Я согласен c{' '}
            <a
              href="https://ya.ru/?npr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EEFF2D] underline"
            >
              условиями обработки персональных данных
            </a>
          </p>
        </div>

        <Error name={props.name}>
          {(error) => (
            <div className="group">
              <img
                src="uploads/CallBackForm/warning.png"
                width={10}
                height={10}
                className="absolute top-1 right-2.5 h-4 w-4 2xl:top-1 2xl:h-5 2xl:w-5"
                alt="warning"
              />
              <span className="pointer-events-none absolute top-0 right-[50px] rounded-lg bg-red-500 px-[15px] py-[5px] text-[12px] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                {error}
              </span>
            </div>
          )}
        </Error>
      </div>
    </>
  );
};
