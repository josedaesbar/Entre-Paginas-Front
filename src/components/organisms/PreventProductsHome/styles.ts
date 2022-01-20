import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: min-content max-content;

  row-gap: 30px;
`;

export const FilterSellers = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 10px;

  justify-content: center;
`;

export const Select = styled.div`
  width: 250px;
`;
