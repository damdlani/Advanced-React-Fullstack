import styled from "styled-components";

export const ProductStyled = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-gap: 2rem;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  

  img {
    width: 100%;
    object-fit: contain;
  }
`;