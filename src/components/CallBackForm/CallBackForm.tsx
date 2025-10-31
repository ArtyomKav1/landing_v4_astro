import { ItemInput } from './CallBackForm_input';
import { Formik, Form } from 'formik';
import { ItemCheckBox } from './CallBackForm_checkBox';
import { initialValues, validationSchema } from './helper';
import { useState } from 'react';
import PhoneInput from './CallBackForm_phoneInput';

export const CallBackForm = () => {
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
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(data);
          setPopup(true);
          resolve('');
        }, 2000);
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="form" className="mx-auto max-w-[1224px] p-5 pb-[88px] md:px-12">
        <div className="rounded-3xl bg-[#8C26EA]/20 py-4">
          <div className="relative flex gap-6 rounded-3xl bg-[#8C26EA] px-14 py-16 max-sm:rounded-[20px] max-sm:px-5">
            {loading && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-5 rounded-3xl bg-black/50 max-sm:rounded-[20px]">
                <img
                  src="/uploads/CallBackForm/Loader_white.svg"
                  className="animate-spin"
                  width={40}
                  alt=""
                />
                <div className="text-white">Загрузка</div>
              </div>
            )}
            {errorFetch && (
              <div className="absolute top-[-60px] left-0 flex w-full items-center justify-center">
                <div className="rounded-lg bg-red-600 px-2.5 py-1.5 text-white">
                  Ошибка отправки запроса.
                </div>
              </div>
            )}
            {!popup ? (
              <div className="flex w-full gap-6 max-lg:flex-col">
                <div className="flex w-full shrink-0 flex-col gap-3 text-[#FFFFFF] lg:flex-1/2">
                  <div className="text-[32px] leading-10 font-semibold tracking-[-1px] max-sm:text-[22px] max-sm:leading-6 max-sm:tracking-[0px]">
                    Попробуйте PravoTech Big Data в действии
                  </div>
                  <div className="text-[16px] leading-6 opacity-80">
                    Мы свяжемся с вами и обсудим, как интегрировать данные в вашу внутреннюю
                    систему.
                  </div>
                </div>
                <div className="relative flex w-full flex-1/2 flex-col gap-3">
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
                        <div className="flex flex-col gap-3">
                          <ItemInput name={'name'} placeholder={'Имя'} />
                          <ItemInput name={'company'} placeholder={'Компания'} />
                          <div className="flex gap-3 max-lg:flex-col">
                            <PhoneInput name="number" placeholder="Телефон" />
                            <ItemInput name={'email'} placeholder={'Email'} />
                          </div>

                          <ItemCheckBox
                            name={'check'}
                            value={values.check}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                          />
                          <button
                            type="submit"
                            className="h-14 w-[200px] rounded-xl bg-[#ecff30] px-7 py-3 text-[#0D0628] duration-300 hover:bg-[#ffffff] max-md:w-full"
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
              <div className="flex flex-col items-center justify-center gap-4 px-9 py-6 text-center text-white/80 max-sm:h-[597px]">
                <img src="/uploads/CallBackForm/checkResponse.svg" className="" width={40} alt="" />
                <div className="flex flex-col gap-2">
                  <div className="text-[22px] leading-7 text-white">Заявка принята</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
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
