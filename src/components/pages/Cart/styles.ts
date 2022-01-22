import { Colors } from "@styles/colors";
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
  display: grid;
  grid-template-columns: 1fr minmax(300px, 350px);
  column-gap: 30px;
`;

export const Table = styled.div`
  display: grid;
  row-gap: 15px;
  grid-auto-rows: min-content;
`;

export const RowHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px minmax(300px, 1fr) 100px 125px 125px;
  column-gap: 15px;
  grid-template-rows: 50px;
`;

export const RowCell = styled.div`
  width: 100%;
  height: min-content;
  margin: auto;
  display: flex;
  justify-content: center;
`;
