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
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Введите корректный номер")
    .required("Введите номер телефона"),
});

export const initialValues = {
  name: "",
  company: "",
  email: "",
  number: "",
  check: false,
};
