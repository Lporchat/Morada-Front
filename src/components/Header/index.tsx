import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Grupo Morada" />
        <button type="button">Novo Post</button>
      </Content>
    </Container>
  );
}
