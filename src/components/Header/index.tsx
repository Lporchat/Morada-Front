
import { Button } from "@mui/material";
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
        <Button onClick={onOpenNewPostModal} variant="contained" color="primary">Criar novo Post</Button>
      </Content>
    </Container>
  );
}


