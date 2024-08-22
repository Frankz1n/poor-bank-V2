import * as yup from "yup";
import { cpf } from "../../shared/utils/validations";

export const schema = yup.object().shape({
  cpf: yup
    .string()
    .required("cpf é obrigatório")
    .min(14, "CPF deve ter 14 digitos")
    .max(14, "CPF deve ter no mínimo 14 digitos")
    .matches(cpf, "CPF inválido"),
});
