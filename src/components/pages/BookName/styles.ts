import { Colors } from "@styles/colors";
import {
  SCREEN_PADDING_HORIZONTAL,
  SCREEN_PADDING_VERTICAL,
} from "@styles/constants";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: ${SCREEN_PADDING_VERTICAL} ${SCREEN_PADDING_HORIZONTAL};
  box-sizing: border-box;
`;

export const ContainerProduct = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(600px, 1fr) minmax(350px, 450px);
  column-gap: 60px;
`;

export const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${Colors.GRAY_C};
  margin: 60px 0;
  box-sizing: border-box;
`;

export const SameAutor = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: min-content min-content;
  row-gap: 40px;

  & > p {
    padding-left: 40px;
  }
`;
