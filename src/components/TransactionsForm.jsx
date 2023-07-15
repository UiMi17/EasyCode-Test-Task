import { useFormik } from "formik";
import * as yup from "yup";

const TransactionsForm = () => {
  const initialValues = {
    name: "",
    sum: "",
    transaction: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Заповніть це поле")
      .max(16, "Ця назва завелика"),
    sum: yup
      .string()
      .required("Заповніть це поле")
      .matches(/^\d+$/, "Це поле має бути числом"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Назва транзакції
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <p>{formik.errors.name}</p> : null}
      </label>
      <label>
        Сума транзакції
        <input
          type="text"
          name="sum"
          onChange={formik.handleChange}
          value={formik.values.sum}
        />
        {formik.errors.sum ? <p>{formik.errors.sum}</p> : null}
      </label>
      <label>
        Тип транзакції
        <select
          name="transaction"
          onChange={formik.handleChange}
          value={formik.values.transaction}
        >
          <option value="income">Дохід</option>
          <option value="cost">Витрата</option>
        </select>
      </label>
      <button type="submit">Додати</button>
    </form>
  );
};

export default TransactionsForm;
