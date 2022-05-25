import * as yup from "yup";

export const deleteFormSchema = yup.object().shape({
  password: yup.string().required(),
});
