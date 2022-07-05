import { Container } from "./styles";

interface Iprops {
  nome: string;
  like: number;
}

export function Card({ nome, like }: Iprops) {
  return (
    <Container>
      <strong>{nome}</strong>
      <div>
        <p>Likes:</p>
        <p>{like}</p>
      </div>
    </Container>
  );
}
