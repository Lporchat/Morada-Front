import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";
import { EditPostModal } from "../EditPostModal";
import { Container } from "./styles";

export function Summary() {
  const [posts, setposts] = useState([]);
  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [isEditedPostModalOpen, setIsEditedPostModalOpen] = useState(false);

  useEffect(() => {
    api.get("post").then((response) => setposts(response.data));
  }, []);


  function handleOpenEdtedPostModal() {
    setIsEditedPostModalOpen(true);
  }
  function handleClosePostModal() {
    setIsEditedPostModalOpen(false);
  }

  function onRequestOpen(id: string) {
    setNome(nome);
    setId(id);
    handleOpenEdtedPostModal();
  }

  return (
    <>
      <Container>
        {posts.map((posts) => {
          return <Card key={posts["id"]} id={posts["id"]} nome={posts["name"]} like={posts["likes"]} onRequestOpen={onRequestOpen} />;
        })}

      </Container>
      <EditPostModal isOpen={isEditedPostModalOpen} onRequestClose={handleClosePostModal} id={id} />
    </>
  );
}
