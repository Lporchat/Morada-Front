import { Container} from "./styles";
import editImg from "../../assets/edit.svg"
import deleteImg from "../../assets/delete.svg"
import { api } from "../../services/api";


interface Iprops {
  id: string;
  nome: string;
  body: string;
  post_id: string;
  like: number;
  onRequestEditedOpen: (id: string) => void,
}

export function CardComment({ id, nome, body, post_id, like, onRequestEditedOpen }: Iprops) {


  function deletePost() {
    api({
      method: 'delete',
      url: '/comment',
      data: {
        id: id
      }
    }).then();
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
