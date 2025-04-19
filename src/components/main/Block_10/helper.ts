import * as Yup from "yup";

const regx = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(regx.name, "Кириллица или латиница (2-20 символов)")
    .required("Обязательное поле"),
  company: Yup.string()
    .matches(regx.name, "Кириллица или латиница (2-20 символов)")
    .required("Обязательное поле"),
  email: Yup.string()
    .matches(regx.email, "Некорректный email")
    .email("Некорректный email")
    .required("Обязательное поле"),
  number: Yup.string()
    .min(5, "Минимум 5 символов")
    .required("Обязательное поле"),
});

export const initialValues = {
  name: "",
  company: "",
  number: "",
  email: "",
  check: false
};



