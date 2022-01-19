import { Colors } from "@styles/colors";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import styled from "styled-components";

export const FilterItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content min-content;
`;

export const FilterHead = styled.div`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  background-color: ${Colors.RED};
  display: flex;
  align-items: center;

  box-sizing: border-box;
`;

export const FilterContent = styled.ul`
  width: 100%;

  display: grid;
  grid-auto-rows: 30px;
  align-items: center;
  box-sizing: border-box;

  border: 1px solid ${Colors.RED_B};
`;

export const FilterItem = styled.li`
  width: 100%;
  height: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: 7.5px;
  align-items: center;
  user-select: none;

  font-family: var(--font);
  font-size: ${FontsSizes.SMALL_A};
  font-weight: ${FontsWeight.THIN};
  color: ${TColor.BLACK};
  cursor: pointer;
  padding: 0 10px;
  box-sizing: border-box;

  &:hover {
    background-color: ${Colors.WHITE_B};
  }
`;

interface SFilterCheck {
  isActive?: boolean;
}

export const FilterCheck = styled.div<SFilterCheck>`
  width: 15px;
  height: 15px;

  border: 1px solid ${Colors.BLUE_A};

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isActive }) => isActive && Colors.BLUE_A};
`;
