import styled, { css } from "styled-components";

import { Colors } from "@styles/colors";
import { Text } from "@atoms/Text";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr min-content;
  row-gap: 15px;
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: none;
  width: 100%;
  height: 100%;

  display: flex;

  & div:first-child div {
    width: 100%;
    height: 100%;
  }

  & div:first-child {
    width: 100%;
    height: 100%;
  }

  transition-property: transform;
  transition-duration: 0.1s;

  &:hover {
    box-shadow: 0 0 15px 0 ${Colors.GRAY_C};
    transform: scale(1.05);
  }
`;

export const DicountContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 40px;

  top: 25px;
  right: 0;

  background-color: ${Colors.RED};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InformationContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, min-content);
  row-gap: 10px;
  align-items: center;
`;

export const TitleProduct = styled.div`
  grid-column: 1 / span 2;
`;

export const StarsContainer = styled.div`
  justify-self: flex-end;
`;

export const ProductPricesContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 25px);
  row-gap: 2.5px;
`;

interface ProductPricePropType {
  isDiscount?: boolean;
}

export const ProductPrice = styled(Text)<ProductPricePropType>`
  position: relative;
  width: max-content;
  ${({ isDiscount }) =>
    isDiscount &&
    css`
      &:before {
        position: absolute;
        content: "";
        left: 0;
        top: calc(50% - 2px);
        right: 0;
        border-top: 2px solid ${Colors.GRAY};

        transform: rotate(-15deg);
      }
    `}
`;

export const ButtonShop = styled.button`
  width: 250px;
  height: 25px;
  border: 0;
  outline: 0;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.RED};
  box-shadow: 0 0 10px 0 ${Colors.BLACK};

  &:hover {
    background-color: ${Colors.RED_C};
  }

  @media (max-width: 1350px) {
    width: 100px;
  }
`;

export const GiftButton = styled(Text)`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const ButtonGiftContainer = styled.div`
  width: 100%;
  justify-self: flex-end;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 5px;
`;
