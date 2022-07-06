import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";


export function Comment() {
  const { token } = useParams<{ token?: string }>();
  const counter = 0;

  const [comment, setComment] = useState([]);
  useEffect(() => {
    api({
      method: 'post',
      url: '/comment',
      data: {
        post_id: token
      }
    }).then((reponse) => setComment(reponse.data));
  }, []);

  return (
    <>
      <h1>{token}</h1>
    </>

  );
}


