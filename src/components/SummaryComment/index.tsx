import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardComment } from "../CardComment";

import { Container } from "./styles";

interface SumarryProps {
  openEditModal: (id: string) => void;
  token: string;

}

export function SummaryComment({ openEditModal, token }: SumarryProps) {

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
      <Container>
        {comment.map((comment) => {
          return <CardComment key={comment["id"]} id={comment["id"]} body={comment["comment"]}
          nome={comment["name_user"]} post_id={comment["post_id"]} like={comment["likes"]} onRequestEditedOpen={openEditModal}
          />;
        })}

      </Container>

    </>
  );
}
