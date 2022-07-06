import { useParams } from "react-router-dom";


export function Comment() {
  const { token } = useParams<{ token?: string }>();
  console.log(token);
  return (
    <h1>testart</h1>
  );
}


