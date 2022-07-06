
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Header } from "../Header";
import NewCommentModal from "../NewCommentModal";


export function Comment() {
  const { token } = useParams<{ token?: string }>();
  const [newCommentModalOpen, setNewCommentModalOpen] = useState(false);
  const handleOpenNewCommentModal = () => setNewCommentModalOpen(true);
  const handleCloseNewCommentModal = () => setNewCommentModalOpen(false);

  const [comment, setComment] = useState([]);
  useEffect(() => {
    api({
      method: 'post',
      url: '/comment',
      data: {
        post_id: token
      }
    }).then((reponse) => setComment(reponse.data));
  }, []);

  return (
    <>
      <Header onOpenNewPostModal={handleOpenNewCommentModal} title={"Criar novo Comentario"} />
      <NewCommentModal open={newCommentModalOpen} handleClose={handleCloseNewCommentModal} />
    </>

  );
}


