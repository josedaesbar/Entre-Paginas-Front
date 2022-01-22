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

  display: flex;

  & div {
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

export const InformationContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 25px);
  row-gap: 5px;
  align-items: center;
`;

export const StarsContainer = styled.div`
  width: 100px;
  justify-self: flex-end;
`;

export const ButtonContainer = styled.div`
  width: 100px;
  justify-self: end;
`;

export const AnchorLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
