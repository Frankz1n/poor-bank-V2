import * as yup from "yup";
import { phoneNumber } from "../../shared/utils/validations";

export const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 letras"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .min(14, "CPF deve ter 14 digitos")
    .max(14, "CPF deve ter no mínimo 14 digitos"),
  cellphone: yup.string().matches(phoneNumber),
  email: yup.string().email("Email invalido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(6, "Senha deve ter pelo menos 6 digitos"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
