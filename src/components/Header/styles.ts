import styled from "styled-components";

export const Container = styled.header`
  background: var(--grey);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--grey-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.5rem;
    height: 3rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
      background: var(--grey-light);
    }
  }
`;
