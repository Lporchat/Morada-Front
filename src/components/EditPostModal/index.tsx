import { FormEvent, useState } from "react";
import closeImg from "../../assets/close.svg";
import Modal from "react-modal";
import { Container, Title } from "./styles";
import { api } from "../../services/api";

interface EditPostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
}
export function EditPostModal({ isOpen, onRequestClose,  id }: EditPostModalProps) {
  const [nome_post, setNome_post] = useState("");

  async function handleCreateEditPost(event: FormEvent) {
    event.preventDefault();
    api({
      method: 'put',
      url: '/post',
      data: {
        id: id,
        name: nome_post,
      }
    }).then();

    setNome_post('');
    onRequestClose();
  }

  return (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      type="button"
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <img src={closeImg} alt="Close" />
    </button>
    <Title>Editar post</Title>

    <Container onSubmit={handleCreateEditPost}>
      <input
        placeholder="Nome do post"
        value={nome_post}
        onChange={(event) => setNome_post(event.target.value)}
      ></input>
      <button type="submit">Atualizar</button>
    </Container>

  </Modal>
  );
}


