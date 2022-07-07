
import Box from '@mui/material/Box';
import closeImg from "../../assets/close.svg";
import Modal from '@mui/material/Modal';
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Title, Container } from './styles';
import { api } from '../../services/api';


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
  allPost: string[];
  setPosts: any
}

export default function NewPostModal({ open, handleClose, allPost, setPosts }: modalProps) {
  const [nome_post, setNome_post] = useState("");
  const [body_post, setBody_post] = useState("");

  async function handleCreateNewPost(event: FormEvent) {
    event.preventDefault();
    let post;



    api({
      method: 'post',
      url: '/post/create',
      data: {
        name: nome_post,
        body: body_post
      }
    }).then((response => {
      post = {
        id: response.data["id"],
        name: response.data["name"],
        body: response.data["body"]
      }
      
      allPost.push(post as never);

    }));



    setNome_post('');
    setBody_post('');
    handleClose();
    setPosts(allPost);
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