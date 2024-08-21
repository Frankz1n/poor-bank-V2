import * as yup from "yup";

export const schema = yup.object().shape({
  cpf: yup
    .string()
    .required("cpf é obrigatório")
    .min(11, "cpf deve ter 11 digitos")
    .matches(/^[0-9]+$/, "cpf deve conter apenas digitos"),
});
