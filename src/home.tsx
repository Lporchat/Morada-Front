import { useState } from "react";
import EditedPostModal from "./components/EditPostModal";
import { Header } from "./components/Header";
import NewPostModal from "./components/NewPostModal";

import { Summary } from "./components/Summary";



export function Home() {
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



  return (
    <>
      <Header onOpenNewPostModal={handleOpenNewPostModal} />
      <Summary openEditModal={handleEditedPostModal} />

      <EditedPostModal open={editedPostModalOpen} handleClose={handleCloseEditedPostModal} id={postId} />
      <NewPostModal open={newPostModalOpen} handleClose={handleCloseNewPostModal} />
    </>
  );
}
