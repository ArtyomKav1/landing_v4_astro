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
      <section id="form" className="mx-auto max-w-[1224px] p-5 pb-[88px] md:px-12">
        <div className="rounded-3xl bg-[#8C26EA]/20 py-4">
          <div className="relative flex gap-6 rounded-3xl bg-[#8C26EA] px-14 py-16 max-sm:rounded-[20px] max-sm:px-5">
            {errorFetch && (
              <div className="absolute top-[-60px] left-0 flex w-full items-center justify-center">
                <p className="rounded-lg bg-red-600 px-2.5 py-1.5 text-white">
                  Ошибка отправки запроса.
                </p>
              </div>
            )}

            <div className="flex w-full gap-6 max-lg:flex-col">
              <div className="flex w-full shrink-0 flex-col gap-3 text-[#FFFFFF] lg:flex-1/2">
                <h1 className="text-[32px] leading-10 font-semibold tracking-[-1px] max-sm:text-[22px] max-sm:leading-6 max-sm:tracking-[0px]">
                  Попробуйте PravoTech Big Data в действии
                </h1>
                <h2 className="text-[16px] leading-6 opacity-80">
                  Мы свяжемся с вами и обсудим, как интегрировать данные в вашу внутреннюю систему.
                </h2>
              </div>
              <div className="relative flex w-full flex-1/2 flex-col gap-3">
                {loading && (
                  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-5 rounded-xl bg-[#8C26EA]/80">
                    <img
                      src="/uploads/CallBackForm/Loader_white.svg"
                      className="animate-spin"
                      width={40}
                      alt="Loader"
                    />
                    <p className="text-white">Загрузка</p>
                  </div>
                )}

                {!popup ? (
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
                    {() => (
                      <Form>
                        <div className="flex flex-col gap-3">
                          <ItemInput name={'name'} placeholder={'Имя'} />
                          <ItemInput name={'company'} placeholder={'Компания'} />
                          <div className="flex gap-3 max-lg:flex-col">
                            <PhoneInput name="number" placeholder="Телефон" />
                            <ItemInput name={'email'} placeholder={'Email'} />
                          </div>

                          <ItemCheckBox name={'check'} />
                          <button
                            type="submit"
                            className="h-14 w-[200px] cursor-pointer rounded-xl bg-[#ecff30] px-7 py-3 text-[#0D0628] transition-all duration-300 hover:bg-[#ffffff] max-md:w-full"
                          >
                            Отправить заявку
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <div className="flex h-[296px] flex-col items-center justify-center gap-4 px-9 py-6 text-center text-white/80 max-sm:h-[382px]">
                    <img
                      src="/uploads/CallBackForm/checkResponse.svg"
                      className=""
                      width={40}
                      alt=""
                    />
                    <div className="flex flex-col gap-2">
                      <h1 className="text-[22px] leading-7 text-white">Заявка принята</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div
                      className="cursor-pointer underline transition-all duration-300 hover:opacity-80"
                      onClick={() => setPopup(false)}
                    >
                      Заполнить форму повторно
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
