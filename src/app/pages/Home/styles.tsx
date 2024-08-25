import { Button, styled, TextField } from "@mui/material";
import background from "../../shared/assets/4882066.jpg";

export const Container = styled("div")`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Body = styled("div")`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const TextHome = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 20px;

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-right: 20px;
  }
`;

export const TittleHome = styled("h1")`
  font-size: 4vw;
  color: #fff;

  @media (max-width: 960px) {
    font-size: 6vw;
  }

  @media (max-width: 600px) {
    font-size: 9vw;
  }
`;

export const SubTittleHome = styled("h2")`
  font-size: 3vw;
  color: #fff;

  @media (max-width: 960px) {
    font-size: 5vw;
  }

  @media (max-width: 600px) {
    font-size: 6vw;
    text-align: center;
  }
`;

export const SubTextHome = styled("h3")`
  font-size: 2.5vw;
  color: #fff;

  @media (max-width: 960px) {
    font-size: 4vw;
  }

  @media (max-width: 600px) {
    font-size: 6vw;
  }
`;

export const ContentHome = styled("h1")`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FormHome = styled("div")`
  background-color: #fff;
  width: 500px;
  height: 500px;
  border-radius: 12px;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 960px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 20px;
  }
`;

export const Form = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FormInput = styled(TextField)`
  width: 70%;
  height: 25px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const FormButton = styled(Button)`
  width: 70%;
  margin-top: 30px;

  @media (max-width: 600px) {
    width: 90%;
    font-size: 10px;
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
