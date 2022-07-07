
import Box from '@mui/material/Box';
import closeImg from "../../assets/close.svg";
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useState } from 'react';
import { Title, Container } from './styles';
import { api } from '../../services/api';
import { PostContext } from '../../PostContext';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface modalProps {
  open: boolean;
  handleClose: () => void;
  id: string;
}

export default function EditedPostModal({ open, handleClose, id }: modalProps) {
  const { editPost } = useContext(PostContext)
  const [nome_post, setNome_post] = useState("");
  const [body_post, setBody_post] = useState("");


  async function handleEditPost(event: FormEvent) {
    event.preventDefault();


    await editPost({ name: nome_post, body: body_post, id: id, });


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
        <Box sx={style}>
          <button
            type="button"
            onClick={handleClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Close" />
          </button>
          <Title>Atualizar post</Title>

          <Container onSubmit={handleEditPost}>
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
            <button type="submit">Atualizar</button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}