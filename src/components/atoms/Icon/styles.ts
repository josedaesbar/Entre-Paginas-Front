import styled from "styled-components";
import { FontsSizes, TColor } from "@styles/fonts";

export interface StyleIconPropsType {
  size: FontsSizes;
  textColor: TColor;
}

export const IconContainer = styled.span<StyleIconPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;

  font-size: ${({ size }) => size};
  color: ${({ textColor }) => textColor};
`;
