import { ErrorMessage } from "./styles";

export default function ErrorFormMessage({ message }: { message: string }) {
  return <ErrorMessage>{message}</ErrorMessage>;
}
