import styled from "styled-components";

export const Container = styled.div`
  background: var(--shape);
  padding: 1.5rem;
  border-radius: 0.5rem;
  color: var(--text-title);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  strong {
    display: block;
    margin-bottom: 2rem;
  }
  button {
    margin-top: 1rem;
    width: 100%;
    background: #fff;
    border: 0;
  }
  img {
    max-width: 1.5rem;
  }
`;
