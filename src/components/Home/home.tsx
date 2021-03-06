import { useContext, useState } from "react";
import { PostContext, PostProvider } from "../../hooks/PostContext";

import EditedPostModal from "../EditPostModal";
import { Header } from "../Header";
import NewPostModal from "../NewPostModal";

import { Summary } from "../Summary";


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

  const [posts, setPosts] = useState<string[]>([]);

  return (
    <PostProvider>
      <Header onOpenNewPostModal={handleOpenNewPostModal} title={"Criar novo post"} />
      <Summary openEditModal={handleEditedPostModal}/>

      <EditedPostModal open={editedPostModalOpen} handleClose={handleCloseEditedPostModal} id={postId} />
      <NewPostModal open={newPostModalOpen} handleClose={handleCloseNewPostModal} allPost={posts} setPosts={setPosts} />
    </PostProvider>
  );
}
