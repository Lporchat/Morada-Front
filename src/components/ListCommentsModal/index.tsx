
import Box from '@mui/material/Box';
import closeImg from "../../assets/close.svg";
import Modal from '@mui/material/Modal';
import { FormEvent, useState } from 'react';
import { Title, Container } from './styles';
import { api } from '../../services/api';

const style = {
  top: '50%',
  left: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

interface modalProps {
  open: boolean;
  handleClose: () => void;
  id: string;
}

export default function ListCommentModal({ open, handleClose, id }: modalProps) {
  const [nome_post, setNome_post] = useState("");
  const [body_post, setBody_post] = useState("");

  console.log(id);

  async function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();


    api({
      method: 'post',
      url: '/post/create',
      data: {
        name: nome_post,
        body: "body_post"
      }
    }).then();

    setNome_post('');
    setBody_post('');
    handleClose();
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 1000 }}>
          <button
            type="button"
            onClick={handleClose}
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
            <input
              placeholder="corpo do post"
              value={body_post}
              onChange={(event) => setBody_post(event.target.value)}
            ></input>
            <button type="submit">Cadastrar</button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}