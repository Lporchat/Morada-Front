
import Box from '@mui/material/Box';
import closeImg from "../../assets/close.svg";
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useState } from 'react';
import { Title, Container } from './styles';
import { api } from '../../services/api';
import { CommentContext } from '../../hooks/CommentContext';

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
  token: string;
}

export default function NewCommentModal({ open, handleClose, token }: modalProps) {
  const { createComment } = useContext(CommentContext)

  const [nome_Comment, setNome_Comment] = useState("");
  const [user_Comment, setUser_Comment] = useState("");

  async function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    createComment({ comment: nome_Comment, name_user: user_Comment, post_id: token })

    setNome_Comment('');
    setUser_Comment('');
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
          <Title>Cadastra Novo Comentario</Title>

          <Container onSubmit={handleCreateNewComment}>
            <input
              placeholder="Nome do Usuario"
              value={user_Comment}
              onChange={(event) => setUser_Comment(event.target.value)}
            ></input>
            <input
              placeholder="Comentario"
              value={nome_Comment}
              onChange={(event) => setNome_Comment(event.target.value)}

            ></input>
            <button type="submit">Cadastrar</button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}