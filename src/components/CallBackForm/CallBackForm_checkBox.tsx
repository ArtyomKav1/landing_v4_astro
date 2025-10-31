'use client';
import { Field } from 'formik';
import type { ChangeEvent, FocusEvent } from 'react';

type ItemCheckBoxProps = {
  name: string;
  value: boolean;
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(
      field: T
    ): T extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
};

export const ItemCheckBox = (props: ItemCheckBoxProps) => {
  return (
    <>
      <div className="relative inline-flex w-[88%] items-center">
        <Field
          className="peer absolute block h-[30px] w-[30px] appearance-none rounded-[5px] border-black bg-transparent pt-2.5 text-[#FFFFFF] focus:ring-0 focus:outline-none"
          type="checkbox"
          name={props.name}
          checked={props.value}
          onChange={props.handleChange}
        />
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#FEFEFE]/10">
          {props.value && <div className="h-3.5 w-3.5 rounded-full bg-white/50" />}
        </div>
        <div className="ml-2 cursor-pointer text-[14px] text-white">
          <p>
            Я согласен c{' '}
            <a href="#" className="text-[#EEFF2D] underline">
              условиями обработки персональных данных
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
