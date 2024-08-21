import { ButtonHeader, Container, Logo, TittleHeader } from "./styles";
import logo from "../../assets/poorbank 4.png";
export default function Header() {
  return (
    <Container>
      <TittleHeader>
        <Logo src={logo} alt="logo poorbank" />
        POORBANK
      </TittleHeader>
      <ButtonHeader>Login</ButtonHeader>
    </Container>
  );
}
