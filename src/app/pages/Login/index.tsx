import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import ErrorFormMessage from "../../shared/components/ErrorFormMessage";
import loading from "../../shared/assets/loading.png";

import {
  Constainer,
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
import { useLocation, useNavigate } from "react-router-dom";

type formData = FieldValues & {
  cpf: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit, formState } = useForm<formData>({
    mode: "onSubmit",
  });
  const { errors, isSubmitting } = formState;
  const navigate = useNavigate();

  const location = useLocation();
  const cpf = location.state?.cpf;

  const loadingFunction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate("/dashboard", {
      state: {
        cpf: cpf,
      },
    });
  };

  const handleSubmitData: SubmitHandler<formData> = async (data) => {
    console.log(data);

    await loadingFunction();
  };

  return (
    <Constainer>
      <InfoContainer></InfoContainer>
      <Divider />
      <FormContainer>
        <Form onSubmit={handleSubmit(handleSubmitData)}>
          <FormTittle>Login</FormTittle>
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
            {...register("password")}
            type="password"
            label="Senha*"
            variant="standard"
          />
          {errors.password && (
            <ErrorFormMessage message={errors.password.message as string} />
          )}
          <FormButton variant="contained" type="submit">
            Enviar
          </FormButton>
        </Form>
        {isSubmitting && (
          <LoadingArea>
            <Loading src={loading} />
          </LoadingArea>
        )}
      </FormContainer>
    </Constainer>
  );
}
