
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
  id: string;
}

export default function EditedCommentModal({ open, handleClose, id }: modalProps) {
  const { editComment } = useContext(CommentContext);
  const [comment, setComment] = useState("");


  async function handleEditComment(event: FormEvent) {
    event.preventDefault();

    editComment({ comment, id })

    setComment('');
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
          <Title>Atualizar Comentario</Title>

          <Container onSubmit={handleEditComment}>
            <input
              placeholder="Comentario"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></input>
            <button type="submit">Atualizar</button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}