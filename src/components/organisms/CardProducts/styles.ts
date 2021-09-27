import styled from "styled-components";

import { Colors } from "@styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr min-content;
  row-gap: 15px;
`;

export const ImageContainer = styled.div`
  flex: none;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 0 ${Colors.BLACK};

  display: flex;

  & div {
    width: 100%;
    height: 100%;
  }
`;

export const InformationContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 25px);
  row-gap: 5px;
  align-items: center;
`;

export const StarsContainer = styled.div`
  justify-self: flex-end;
`;

export const ButtonShop = styled.button`
  width: 100px;
  height: 100%;
  border: 0;
  outline: 0;
  justify-self: flex-end;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.RED};
  box-shadow: 0 0 10px 0 ${Colors.BLACK};

  &:hover {
    background-color: ${Colors.RED_C};
  }
`;
