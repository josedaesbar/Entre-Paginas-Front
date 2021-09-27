import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 28px;

  display: grid;
  grid-template-columns: 20px 1fr;
  column-gap: 5px;

  border: 1px solid ${Colors.BLACK};
  border-radius: 7.5px;
  padding: 0 5px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-family: var(--font);

  border: 0;

  &:focus-visible {
    outline: 0;
  }
`;
