
import { useContext } from "react";
import { PostContext } from "../../hooks/PostContext";
import { Card } from "../Card";

import { Container } from "./styles";

interface SumarryProps {
  openEditModal: (id: string) => void;
}

export function Summary({ openEditModal }: SumarryProps) {
  const { posts } = useContext(PostContext);

  return (
    <>
      <Container>
        {posts.map((posts) => {
          return <Card key={posts["id"]} id={posts["id"]} body={posts["body"]} nome={posts["name"]} like={posts["likes"]} onRequestEditedOpen={openEditModal}
          />;
        })}

      </Container>

    </>
  );
}
