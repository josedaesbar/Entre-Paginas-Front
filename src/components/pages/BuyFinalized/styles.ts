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
  margin: auto;

  display: grid;
  justify-content: center;
  justify-items: center;
  row-gap: 25px;
  grid-auto-rows: min-content;
`;

export const ImageContainer = styled.div`
  width: 150px;
`;

export const BoxMessage = styled.div`
  width: 475px;
  padding: 20px 40px;
  box-sizing: border-box;

  display: grid;
  row-gap: 20px;

  border: 1px solid ${Colors.RED};
`;

export const ButtonContainer = styled.div`
  & button {
    border-radius: 10px;
    padding: 15px 10px;
    box-sizing: border-box;
  }
`;

export const ReturnHome = styled.a`
  text-decoration: none;
`;
