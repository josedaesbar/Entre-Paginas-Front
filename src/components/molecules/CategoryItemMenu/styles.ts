import { Colors } from "@styles/colors";
import styled, { css } from "styled-components";

export interface SCategorieItemMenuPropTypes {
  isActive: boolean;
}

export const Container = styled.div<SCategorieItemMenuPropTypes>`
  position: relative;
  width: 100%;
  height: 100%;

  padding: 0 20px 0 40px;
  box-sizing: border-box;
  overflow: hidden;

  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${Colors.RED};

      & p {
        color: ${Colors.WHITE};
      }

      &::before {
        content: "";
        position: absolute;
        height: 30px;
        width: 30px;

        background-color: ${Colors.GRAY_B};
        transform: rotate(45deg);
        left: -20px;
      }
    `}
`;
