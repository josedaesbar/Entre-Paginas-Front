import { Colors } from "@styles/colors";
import styled, { css } from "styled-components";

export interface SSubCategorieItemPropTypes {
  isActive: boolean;
}

export const Container = styled.div<SSubCategorieItemPropTypes>`
  width: 100%;
  height: 100%;

  padding: 0 20px 0 40px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${Colors.WHITE_B};

      & p {
        color: ${Colors.BLACK_B};
      }
    `}
`;
