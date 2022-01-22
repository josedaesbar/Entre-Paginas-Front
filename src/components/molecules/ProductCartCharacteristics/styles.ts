import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  row-gap: 10px;
`;

export const ListContainer = styled.ul`
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 15px;
`;

export const ListItem = styled.li`
  list-style-position: inside;
  font-family: var(--font);
  font-size: ${FontsSizes.SMALL_B};
  font-weight: ${FontsWeight.THIN};
  color: ${TColor.BLACK};
`;
