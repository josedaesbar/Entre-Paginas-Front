import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 325px;
  background-color: ${Colors.WHITE};

  display: grid;
  grid-template-rows: 50px min-content;

  box-shadow: 0 0 5px 0 ${Colors.GRAY_B};
`;

export const TitlePadding = styled.div`
  display: flex;
  align-items: center;

  padding: 0 20px;
  box-sizing: border-box;
`;

export const ItemsMenu = styled.div`
  width: 100%;

  display: grid;
  grid-auto-rows: 30px;
`;

export const ItemOptionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 500px;
  padding: 50px 0 25px 0;

  display: grid;
  grid-auto-rows: 30px;

  background-color: ${Colors.GRAY};
`;
