import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";


export function Comment() {
  const { token } = useParams<{ token?: string }>();

  const [comment, setComment] = useState([]);

  const [posts, setposts] = useState([]);
  useEffect(() => {
    api({
      method: 'post',
      url: '/comment',
      data: {
        post_id: token
      }
    }).then((reponse) => setComment(reponse.data)).then();
  }, []);
  console.log(comment);
  return (
    <>
      <h1>{token}</h1>
    </>

  );
}


