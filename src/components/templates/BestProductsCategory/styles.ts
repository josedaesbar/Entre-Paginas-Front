import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;

  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }

  @media (max-width: 690px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 40px;
  }
`;
