import { Button, styled, TextField } from "@mui/material";

export const Constainer = styled("div")`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled("div")`
  background-color: #3e75cf;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled("div")`
  background-color: #fff;
  width: 5px;
  height: 100vh;
`;

export const FormContainer = styled("div")`
  background-color: #d9d9d9;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export const FormTittle = styled("h2")`
  font-size: 50px;
`;

export const FormInput = styled(TextField)`
  width: 65%;
`;

export const FormButton = styled(Button)`
  width: 40%;
  margin-top: 20px;
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
