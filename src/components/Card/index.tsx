import { Container, Links } from "./styles";
import commentImg from "../../assets/comment.svg"
import likeImg from "../../assets/like.svg"
import editImg from "../../assets/edit.svg"
import deleteImg from "../../assets/delete.svg"
import { api } from "../../services/api";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  function deletePost() {
    api({
      method: 'delete',
      url: '/post',
      data: {
        id: id
      }
    }).then();
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
        <button onClick={deletePost}>
          <img src={deleteImg} alt="imagem de deleção" />
        </button>
      </div>
    </Container >
  );
}
