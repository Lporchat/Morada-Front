import { Container, Links } from "./styles";
import commentImg from "../../assets/comment.svg"
import likeImg from "../../assets/like.svg"
import editImg from "../../assets/edit.svg"
import deleteImg from "../../assets/delete.svg"
import { api } from "../../services/api";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../hooks/PostContext";

interface Iprops {
  id: string;
  nome: string;
  body: string;
  like: number;
  onRequestEditedOpen: (id: string) => void,
}

export function Card({ id, nome, body, like, onRequestEditedOpen }: Iprops) {
  const [deslike, setDeslike] = useState(false);
  const [likes, setLikes] = useState(like);
  const { deletePost } = useContext(PostContext)

  function likePost() {
    api({
      method: 'post',
      url: '/post/like',
      data: {
        id: id
      }
    }).then(() => {
      setLikes(Number(likes) + 1);
      setDeslike(true);
    });
  }

  function deslikePost() {
    api({
      method: 'post',
      url: '/post/deslike',
      data: {
        id: id
      }
    }).then(() => {
      setLikes(Number(likes) - 1);
      setDeslike(false);
    });
  }

  async function delPost() {
    await deletePost(id);
  }

  function editedPost() {
    onRequestEditedOpen(id);
  }

  const router = "/comment/" + id;

  return (
    <Container>
      <strong>{nome}</strong>
      <div>
        <p>Likes:</p>
        <p>{likes}</p>
      </div>
      <div>
        <button onClick={deslike ? deslikePost : likePost}>
          <img src={likeImg} alt="imagem de like" />
        </button>
        <Links>
          <Link to={router}>
            <img src={commentImg} alt="imagem de comentarios" />
          </Link>
        </Links>
        <button onClick={editedPost}>
          <img src={editImg} alt="imagem de edição" />
        </button>
        <button onClick={delPost}>
          <img src={deleteImg} alt="imagem de deleção" />
        </button>
      </div>
    </Container >
  );
}
