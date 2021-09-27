import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import styled from "styled-components";

export interface STextPropType {
  textColor: TColor;
  fontWeight: FontsWeight;
  fontSize: FontsSizes;
  textCenter?: boolean;
}

export const Text = styled.p<STextPropType>`
  margin: 0;
  font-family: var(--font);
  display: inline;

  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor }) => textColor};
  text-align: ${({ textCenter }) => (textCenter ? "center" : "left")};
`;
