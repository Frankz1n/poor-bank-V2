import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";

import {
  Container,
  Divider,
  Form,
  FormButton,
  FormContainer,
  FormInput,
  FormTittle,
  InfoContainer,
  Loading,
  LoadingArea,
} from "./styles";
import loading from "../../shared/assets/loading.png";
import ErrorFormMessage from "../../shared/components/ErrorFormMessage";

type formData = {
  fullName: string;
  cpf: string;
  cellphone?: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const { handleSubmit, formState, register } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting } = formState;
  const navigate = useNavigate();

  const location = useLocation();
  const cpf = location.state?.cpf;

  const loadingFunction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate("/login", {
      state: {
        cpf: cpf,
      },
    });
  };

  const handleSubmitData = async (data: formData) => {
    console.log(data);

    await loadingFunction();
  };

  return (
    <Container>
      <InfoContainer></InfoContainer>
      <Divider />
      <FormContainer>
        <Form onSubmit={handleSubmit(handleSubmitData)}>
          <FormTittle>Cadastro</FormTittle>
          <FormInput
            {...register("fullName")}
            type="text"
            label="Nome Completo*"
            variant="standard"
          />
          {errors.fullName && (
            <ErrorFormMessage message={errors.fullName.message as string} />
          )}
          <FormInput
            {...register("cpf")}
            type="text"
            label="CPF*"
            defaultValue={cpf}
            variant="standard"
          />
          {errors.cpf && (
            <ErrorFormMessage message={errors.cpf.message as string} />
          )}
          <FormInput
            {...register("cellphone")}
            type="text"
            label="Celular*"
            variant="standard"
          />
          {errors.cellphone && (
            <ErrorFormMessage message={errors.cellphone.message as string} />
          )}
          <FormInput
            {...register("email")}
            type="text"
            label="Email*"
            variant="standard"
          />
          {errors.email && (
            <ErrorFormMessage message={errors.email.message as string} />
          )}
          <FormInput
            {...register("password")}
            type="password"
            label="Senha*"
            variant="standard"
          />
          {errors.password && (
            <ErrorFormMessage message={errors.password.message as string} />
          )}
          <FormInput
            {...register("confirmPassword")}
            type="password"
            label="Confirme sua senha*"
            variant="standard"
          />
          {errors.confirmPassword && (
            <ErrorFormMessage
              message={errors.confirmPassword.message as string}
            />
          )}
          <FormButton variant="contained" type="submit">
            Enviar
          </FormButton>
        </Form>
        {isSubmitting && (
          <LoadingArea>
            <Loading src={loading} alt="loading icon" />
          </LoadingArea>
        )}
      </FormContainer>
    </Container>
  );
}
