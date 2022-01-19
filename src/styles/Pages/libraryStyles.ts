import { Colors } from "@styles/colors";
import { NAVBAR_HEIGHT } from "@styles/constants";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 40px 80px;
  box-sizing: border-box;
  display: flex;
  column-gap: 75px;
`;

export const Filters = styled.div`
  width: 250px;
  min-width: 250px;
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 25px;
`;

export const BooksContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
  column-gap: 35px;
  row-gap: 35px;
`;
