import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
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

export const ImagesContainer = styled.div`
  width: 100%;
  height: 350px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;

  & div {
    width: 100%;
    height: 100%;
  }
`;
