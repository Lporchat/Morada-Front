import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";

import { Container } from "./styles";

interface SumarryProps {
  openEditModal: (id: string) => void;

}

export function Summary({ openEditModal,  }: SumarryProps) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    api.get("post").then((response) => setposts(response.data));
  }, []);

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
