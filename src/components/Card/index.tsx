import { Container } from "./styles";
import commentImg from "../../assets/comment.svg"
import likeImg from "../../assets/like.svg"
import editImg from "../../assets/edit.svg"
import deleteImg from "../../assets/delete.svg"
import { api } from "../../services/api";
import { useState } from "react";

interface Iprops {
  id: string;
  nome: string;
  like: number;
}


export function Card({ id, nome, like }: Iprops) {
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
        <button onClick={() => console.log(id + "comentarios")}>
          <img src={commentImg} alt="imagem de comentarios" />
        </button>
        <button onClick={() => console.log(id + "editar")}>
          <img src={editImg} alt="imagem de edição" />
        </button>
        <button onClick={deletePost}>
          <img src={deleteImg} alt="imagem de deleção" />
        </button>
      </div>

    </Container >
  );
}
