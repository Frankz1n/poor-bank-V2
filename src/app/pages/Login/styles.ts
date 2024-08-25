import { Button, styled, TextField } from "@mui/material";

export const Constainer = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
`;

export const InfoContainer = styled("div")`
  background-color: #3e75cf;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
`;

export const Divider = styled("div")`
  background-color: #fff;
  width: 5px;
  height: 100vh;

  @media (max-width: 960px) {
    width: 100%;
    height: 5px;
  }
`;

export const FormContainer = styled("div")`
  background-color: #d9d9d9;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
`;

export const Form = styled("form")`
  background-color: #fff;
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 12px;

  @media (max-width: 960px) {
    width: 80%;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FormTittle = styled("h2")`
  font-size: 4vw;

  @media (max-width: 960px) {
    font-size: 5vw;
  }

  @media (max-width: 600px) {
    font-size: 6vw;
  }
`;

export const FormInput = styled(TextField)`
  width: 65%;

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FormButton = styled(Button)`
  width: 40%;
  margin-top: 20px;

  @media (max-width: 960px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    width: 60%;
  }
`;

export const LoadingArea = styled("div")`
  background-color: rgba(0, 0, 0, 0.432);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
`;

export const Loading = styled("img")`
  width: 100px;

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
