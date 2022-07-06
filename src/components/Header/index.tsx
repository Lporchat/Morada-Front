
import { Button } from "@mui/material";
import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewPostModal: () => void;
  title: string;
}

export function Header({ onOpenNewPostModal, title }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Grupo Morada" />
        <Button onClick={onOpenNewPostModal} variant="contained" color="primary">{title}</Button>
      </Content>
    </Container>
  );
}


