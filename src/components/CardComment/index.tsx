import { Container } from "./styles";
import editImg from "../../assets/edit.svg"
import deleteImg from "../../assets/delete.svg"
import { api } from "../../services/api";
import { CommentContext } from "../../hooks/CommentContext";
import { useContext } from "react";


interface Iprops {
  id: string;
  nome: string;
  body: string;
  onRequestEditedOpen: (id: string) => void,
}

export function CardComment({ id, nome, body, onRequestEditedOpen }: Iprops) {
  const { deleteComment } = useContext(CommentContext);

  function deletePost() {
    deleteComment(id);
  }

  function editedPost() {
    onRequestEditedOpen(id);
  }
  return (
    <Container>
      <strong>{nome}</strong>
      <div>
        <p>{body}</p>
      </div>
      <div>
        <button onClick={editedPost}>
          <img src={editImg} alt="imagem de edição" />
        </button>
        <button onClick={deletePost}>
          <img src={deleteImg} alt="imagem de deleção" />
        </button>
      </div>
    </Container >
  );
}
