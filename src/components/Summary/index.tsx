import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";
import { Container } from "./styles";

export function Summary() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    api.get("post").then((response) => setposts(response.data));
  }, []);
  return (
    <Container>
      {posts.map((posts) => {
        return <Card nome={posts["name"]} like={posts["likes"]} />;
      })}
    </Container>
  );
}

// {posts.map((posts) => {
// return <Card />;
// })}
