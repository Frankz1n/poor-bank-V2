import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 letras"),
  cpf: yup
    .string()
    .required("CPF é obrigatório")
    .min(11, "CPF deve ter 11 digitos"),
  cellphone: yup.string().required("Celular é obrigatório"),
  email: yup.string().email("Email invalido").required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  confirmPassword: yup.string().required("Confirmar senha é obrigatório"),
});
