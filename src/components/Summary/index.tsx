
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import { Card } from "../Card";

import { Container } from "./styles";

interface SumarryProps {
  openEditModal: (id: string) => void;
}

export function Summary({ openEditModal }: SumarryProps) {
  const data = useContext(PostContext);
  console.log(data)
  return (
    <>
      <Container>
        {data.map((data) => {
          return <Card key={data["id"]} id={data["id"]} body={data["body"]} nome={data["name"]} like={data["likes"]} onRequestEditedOpen={openEditModal}
          />;
        })}

      </Container>

    </>
  );
}
