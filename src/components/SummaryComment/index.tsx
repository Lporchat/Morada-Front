import { useContext, useEffect, useState } from "react";
import { CommentContext } from "../../hooks/CommentContext";
import { api } from "../../services/api";
import { CardComment } from "../CardComment";

import { Container } from "./styles";

interface SumarryProps {
  openEditModal: (id: string) => void;
}

export function SummaryComment({ openEditModal }: SumarryProps) {
  const { comments } = useContext(CommentContext);
  console.log(comments)

  return (
    <>
      <Container>
        {comments.map((comment) => {
          return <CardComment key={comment["id"]} id={comment["id"]} body={comment["comment"]}
            nome={comment["name_user"]} onRequestEditedOpen={openEditModal}
          />;
        })}
      </Container>

    </>
  );
}



