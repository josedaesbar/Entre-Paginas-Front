import { Colors } from "@styles/colors";
import styled, { css } from "styled-components";

export const RowBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px minmax(300px, 1fr) 100px 125px 125px;
  column-gap: 15px;
  grid-template-rows: min-content;
`;

export const RowCell = styled.div`
  width: 100%;
  height: min-content;
  margin: auto;
  display: flex;
  justify-content: center;
`;

export const NameItem = styled.div`
  width: 100%;
  height: min-content;
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 10px;
  margin: auto;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const MaxContent = styled.div`
  width: max-content;
`;

export const QuantityControl = styled.div`
  width: 100px;
  height: min-content;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 27.5px);

  border-radius: 5px;
  border: 1px solid ${Colors.GRAY_B};
`;

export const Quantity = styled.div`
  grid-row: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

interface SButtonControl {
  isBorderBottom?: boolean;
}

export const ButtonControl = styled.div<SButtonControl>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid ${Colors.GRAY_B};
  ${({ isBorderBottom }) =>
    isBorderBottom &&
    css`
      border-bottom: 1px solid ${Colors.GRAY_B};
    `}

  cursor: pointer;

  &:hover {
    background-color: ${Colors.GRAY_C};
  }
`;
