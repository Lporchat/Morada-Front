
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CommentProvider } from "../../hooks/CommentContext";
import EditedCommentModal from "../EditCommentModal";
import { Header } from "../Header";
import NewCommentModal from "../NewCommentModal";
import { SummaryComment } from "../SummaryComment";


export function Comment() {
  const { token } = useParams<{ token: string }>();
  const [newCommentModalOpen, setNewCommentModalOpen] = useState(false);
  const handleOpenNewCommentModal = () => setNewCommentModalOpen(true);
  const handleCloseNewCommentModal = () => setNewCommentModalOpen(false);

  const [editCommentModalOpen, setEditCommentModalOpen] = useState(false);
  const [commentId, setCommentId] = useState("");
  const handleOpenEditCommentModal = () => setEditCommentModalOpen(true);
  const handleCloseEditCommentModal = () => setEditCommentModalOpen(false);
  const handleEditCommentModal = (id: string) => {
    setCommentId(id);
    handleOpenEditCommentModal()
  }


  return (
    <CommentProvider>
      <Header onOpenNewPostModal={handleOpenNewCommentModal} title={"Criar novo Comentario"} />
      <SummaryComment openEditModal={handleEditCommentModal} />
      <NewCommentModal open={newCommentModalOpen} handleClose={handleCloseNewCommentModal} token={token as string} />
      <EditedCommentModal handleClose={handleCloseEditCommentModal} id={commentId} open={editCommentModalOpen} />
    </CommentProvider>
  );
}


