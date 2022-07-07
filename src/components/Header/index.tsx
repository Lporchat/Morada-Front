
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
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
        <Link to={"/"}>
          <img src={logoImg} alt="Grupo Morada" />
        </Link>
        <Button onClick={onOpenNewPostModal} variant="contained" color="primary">{title}</Button>
      </Content>
    </Container>
  );
}


