import { ItemInput } from "./Item_input";
import { Formik, Form } from "formik";
import { ItemCheckBox } from "./Item_checkBox";
import { initialValues, validationSchema } from "./helper";
import { useState } from "react";
import PhoneInput from "./PhoneInput";

export const InputBlock = () => {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [errorFetch, setErrorFetch] = useState(false);

  const postData = async (data: {
    name: string;
    company: string;
    number: string;
    email: string;
    check: boolean;
  }) => {
    setErrorFetch(false);
    setLoading(true);
    try {
      const response = await fetch("https://back.personal-website.ru/v4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        setErrorFetch(true);
        throw new Error(`HTTP input error! Status: ${response.status}`);
      } else {
        setPopup(true);
      }

      const result = await response.json();
      console.log("Success:", result);
      return result;
    } catch (error) {
      setErrorFetch(true);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" md:px-[48px] p-[20px] pb-[88px] max-w-[1224px] mx-auto">
        <div className="bg-[#8C26EA]/20 py-[16px] rounded-[24px]">
          <div className="   max-sm:rounded-[20px] relative bg-[#8C26EA] px-[56px] max-sm:px-[20px] rounded-[24px] py-[64px] flex gap-[24px]">
            {errorFetch && (
              <div className="absolute top-[-60px] left-0 w-full flex items-center justify-center">
                <div className=" bg-red-600 text-white py-[6px] px-[10px] rounded-[8px]">
                  Ошибка отправки запроса.
                </div>
              </div>
            )}
            {!popup ? (
              <div className="w-full flex max-lg:flex-col gap-[24px] ">
                <div className="text-[#FFFFFF] lg:flex-1/2   w-full shrink-0  flex  flex-col gap-[12px]">
                  <div className="text-[32px] leading-[40px] font-semibold tracking-[-1px] max-sm:text-[22px] max-sm:leading-[24px]  max-sm:tracking-[0px]">
                    Попробуйте PravoTech Big Data в действии
                  </div>
                  <div className="text-[16px] opacity-80 leading-[24px]">
                    Мы свяжемся с вами и обсудим, как интегрировать данные
                    в вашу внутреннюю систему.
                  </div>
                </div>
                <div className="w-full flex-1/2   flex flex-col gap-[12px] relative">
                  {loading && (
                    <div className="absolute inset-0 bg-black/50 z-50 rounded-[12px] flex flex-col items-center justify-center gap-[20px]">
                      <img
                        src="/Block_10/Loader_white.svg"
                        className="animate-spin "
                        width={40}
                        alt=""
                      />
                      <div className="text-white">Загрузка</div>
                    </div>
                  )}

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                      try {
                        await postData(values);
                      } finally {
                        setSubmitting(false);
                      }
                    }}
                  >
                    {({ values, handleChange, handleBlur }) => (
                      <Form>
                        <div className="flex flex-col gap-[12px]">
                          <ItemInput name={"name"} placeholder={"Имя"} />
                          <ItemInput
                            name={"company"}
                            placeholder={"Компания"}
                          />
                          <div className="flex max-lg:flex-col  gap-[12px] ">
                            <PhoneInput name="number" placeholder="Телефон" />
                            <ItemInput name={"email"} placeholder={"Email"} />
                          </div>

                          <ItemCheckBox
                            name={"check"}
                            value={values.check}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                          />
                          <button
                            type="submit"
                            className="text-[#0D0628] max-md:w-full bg-[#ecff30] h-[56px] rounded-[12px] px-[28px] py-[12px] w-[200px] hover:bg-[#ffffff] duration-300"
                          >
                            Отправить заявку
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center text-white/80 max-sm:h-[597px] gap-[16px] px-[36px] py-[24px]">
                <img
                  src="/Block_10/checkResponse.svg"
                  className=""
                  width={40}
                  alt=""
                />
                <div className="flex flex-col  gap-[8px]">
                  <div className="text-white text-[22px] leading-[28px]">
                    Заявка принята
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </div>
                <div className="underline" onClick={() => setPopup(false)}>
                  Заполнить форму повторно
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
