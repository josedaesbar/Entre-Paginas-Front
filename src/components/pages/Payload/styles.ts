import {
  SCREEN_PADDING_HORIZONTAL,
  SCREEN_PADDING_VERTICAL,
} from "@styles/constants";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: ${SCREEN_PADDING_VERTICAL} ${SCREEN_PADDING_HORIZONTAL};
  box-sizing: border-box;

  display: grid;
  grid-auto-rows: min-content;
  row-gap: 25px;

  overflow: auto;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  column-gap: 60px;
`;
