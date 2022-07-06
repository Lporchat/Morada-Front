import { useState } from "react";
import EditedPostModal from "./components/EditPostModal";
import { Header } from "./components/Header";
import ListCommentModal from "./components/ListCommentsModal";
import NewPostModal from "./components/NewPostModal";

import { Summary } from "./components/Summary";
import { GlobalStyle } from "./styles/global";


export function App() {
  const [newPostModalOpen, setNewPostModalOpen] = useState(false);
  const handleOpenNewPostModal = () => setNewPostModalOpen(true);
  const handleCloseNewPostModal = () => setNewPostModalOpen(false);

  const [editedPostModalOpen, setEditedPostModalOpen] = useState(false);
  const [postId, setPostId] = useState("");
  const handleOpenEditedPostModal = () => setEditedPostModalOpen(true);
  const handleCloseEditedPostModal = () => setEditedPostModalOpen(false);
  const handleEditedPostModal = (id: string) => {
    setPostId(id);
    handleOpenEditedPostModal();
  };

  const [newcommentModalOpen, setNewcommentModalOpen] = useState(false);
  const handleOpenNewCommentModal = () => setNewcommentModalOpen(true);
  const handleCloseNewCommentModal = () => setNewcommentModalOpen(false);
  const handleCommentModal = (id: string) => {
    setPostId(id);
    handleOpenEditedPostModal();
  };

  return (
    <>
      <Header onOpenNewPostModal={handleOpenNewPostModal} />
      <Summary openEditModal={handleEditedPostModal} openCommentModal={handleCommentModal} />

      <ListCommentModal open={newcommentModalOpen} handleClose={handleCloseNewCommentModal} id={postId}/>
      <EditedPostModal open={editedPostModalOpen} handleClose={handleCloseEditedPostModal} id={postId} />
      <NewPostModal open={newPostModalOpen} handleClose={handleCloseNewPostModal} />
      <GlobalStyle />
    </>
  );
}
