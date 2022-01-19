import { Colors } from "@styles/colors";
import styled, { css } from "styled-components";

interface ButtonStylesProps {
  buttonColor: Colors;
}

const ButtonStyles = css<ButtonStylesProps>`
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  justify-self: flex-end;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ buttonColor }) => buttonColor};

  transition-property: box-shadow;
  transition-duration: 0.025s;

  &:hover {
    box-shadow: 0 0 5px 0 ${({ buttonColor }) => buttonColor};
  }
`;

export const Button = styled.button`
  ${ButtonStyles}
`;
