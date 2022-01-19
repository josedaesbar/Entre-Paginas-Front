import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

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

export const ContentItem = styled.div`
  padding: 0 80px;
  box-sizing: border-box;

  display: grid;
  grid-auto-columns: 1fr;
  row-gap: 80px;
`;
