import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import styled, { css } from "styled-components";

export interface STextPropType {
  textColor: TColor;
  fontWeight: FontsWeight;
  fontSize: FontsSizes;
  textCenter?: boolean;
}

const StyleText = css<STextPropType>`
  margin: 0;
  font-family: var(--font);
  display: inline;

  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  text-align: ${({ textCenter }) => (textCenter ? "center" : "left")};
`;

export const Text = styled.p`
  ${StyleText}
`;

export const H1 = styled.h1`
  ${StyleText}
`;

export const Span = styled.span`
  ${StyleText}
`;
