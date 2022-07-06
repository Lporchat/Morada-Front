
import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewPostModal: () => void;
}

export function Header({ onOpenNewPostModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Grupo Morada" />
        <button type="button" onClick={onOpenNewPostModal}>
          Novo Post
        </button>
      </Content>
    </Container>
  );
}
