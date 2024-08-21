import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";

import Header from "../../shared/components/header";
import {
  TextHome,
  Body,
  Container,
  ContentHome,
  Form,
  FormButton,
  FormHome,
  FormInput,
  Loading,
  LoadingArea,
  TittleHome,
  SubTittleHome,
  SubTextHome,
} from "./styles";
import ErrorFormMessage from "../../shared/components/ErrorFormMessage";
import loading from "../../shared/assets/loading.png";

type formData = {
  cpf: string;
};

export default function Home() {
  const { register, handleSubmit, formState, getValues } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { errors, isSubmitting } = formState;
  const navigate = useNavigate();

  const loadingFunction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate("/register", {
      state: {
        cpf: getValues("cpf"),
      },
    });
  };

  const handleSubmitData = async (data: formData) => {
    console.log(data);

    await loadingFunction();
  };

  return (
    <Container>
      <Header />
      <Body>
        <TextHome>
          <TittleHome>O banco certo para você!</TittleHome>
          <SubTittleHome>
            Mais de 1.000.000 de pessoas ja passaram por aqui.
          </SubTittleHome>
          <SubTextHome>Crie sua conta gratuitamente</SubTextHome>
          <SubTextHome>e aproveite nossos diversos serviços</SubTextHome>
        </TextHome>
        <ContentHome>
          <FormHome>
            <h2>Crie sua conta!</h2>
            <Form onSubmit={handleSubmit(handleSubmitData)}>
              <FormInput
                {...register("cpf")}
                type="text"
                label="Cpf*"
                variant="standard"
              />
              {errors.cpf && (
                <ErrorFormMessage message={errors.cpf.message as string} />
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
          </FormHome>
        </ContentHome>
      </Body>
    </Container>
  );
}
