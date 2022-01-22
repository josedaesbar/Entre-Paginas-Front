import { Colors } from "@styles/colors";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  box-sizing: border-box;

  background-color: ${Colors.WHITE_B};

  display: grid;
  grid-auto-rows: min-content;
  row-gap: 20px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  box-sizing: border-box;
  border-top: 1px solid ${Colors.GRAY_B};
  border-bottom: 1px solid ${Colors.GRAY_B};
`;

export const ControlsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 15px;
`;

export const QuantityControl = styled.div`
  width: 100px;
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

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;

  & button {
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }
`;

export const GiftList = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 10px;
  align-items: center;
`;

export const AnchorLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
