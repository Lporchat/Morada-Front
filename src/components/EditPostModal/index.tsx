import { FormEvent, useState } from "react";
import closeImg from "../../assets/close.svg";
import Modal from "react-modal";
import { Container, Title } from "./styles";
import { api } from "../../services/api";

interface NewPostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewPostModal({ isOpen, onRequestClose }: NewPostModalProps) {
  const [nome_post, setNome_post] = useState("");

  async function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();


    api({
      method: 'post',
      url: '/post/create',
      data: {
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
      <Title>Cadastra post</Title>

      <Container onSubmit={handleCreateNewPost}>
        <input
          placeholder="Nome do post"
          value={nome_post}
          onChange={(event) => setNome_post(event.target.value)}
        ></input>
        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  );
}


