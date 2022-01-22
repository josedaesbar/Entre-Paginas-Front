import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const SessionRequired = styled.div`
  width: max-content;
  display: grid;
  row-gap: 15px;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  & button {
    padding: 10px;
    border-radius: 10px;
  }
`;

export const Comentaries = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
`;
