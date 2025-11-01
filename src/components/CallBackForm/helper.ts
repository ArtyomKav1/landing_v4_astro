import * as Yup from 'yup';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validationSchema = Yup.object().shape({
  name: Yup.string()

    .max(60, 'Макс 60 символов')
    .required('Обязательное поле'),
  company: Yup.string()

    .max(60, 'Максимальная длина 60 символов')
    .required('Обязательное поле'),
  email: Yup.string()
    .matches(emailRegex, 'Некорректный email')
    .email('Некорректный email')
    .required('Обязательное поле'),
  number: Yup.string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Введите корректный номер')
    .required('Обязательное поле'),
  check: Yup.boolean().oneOf([true], 'Необходимо согласие'),
});

export const initialValues = {
  name: '',
  company: '',
  email: '',
  number: '',
  check: false,
};