import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px 80px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: 100px;
`;

export const Content = styled.div`
  width: 100%;
  margin: 50px 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: 50px;
`;
