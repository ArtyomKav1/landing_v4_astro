import { ItemInput } from "./Item_input";
import { Formik, Form } from "formik";
import { ItemCheckBox } from "./Item_checkBox";
import { initialValues, validationSchema } from "./helper";
// import cn from 'classnames'
// import errorImg from '../../../assets/main/warning.svg'
// import okImg from '../../../assets/main/check.svg'


export const InputBlock = () => {

    return (
        <>
            <div className="">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                    }}>
                    {({ values,
                        handleChange,
                        handleBlur,
                        touched,
                        errors
                    }) => (
                        <Form>
                            <div className="flex flex-col gap-[12px]">
                                <ItemInput name={"name"} placeholder={"Имя"} />
                                <ItemInput name={"company"} placeholder={"Компания"} />
                                <div className="flex gap-[12px]">
                                    <ItemInput name={"number"} placeholder={"Телефон"} />
                                    <ItemInput name={"email"} placeholder={"Email"} />
                                </div>
                                <ItemCheckBox name={"check"} value={values.check} handleChange={handleChange} handleBlur={handleBlur} />
                                <button type="submit" className="text-[#0D0628] bg-[#ecff30] h-[56px] rounded-[12px] px-[28px] py-[12px] w-[200px]">
                                    Отправить заявку
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>



        </>
    );
};
