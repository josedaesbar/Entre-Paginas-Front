import { Colors } from "@styles/colors";
import { PaddingHorizontal } from "@styles/constants";
import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 65px;
  background-color: ${Colors.WHITE};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${PaddingHorizontal};
  box-sizing: border-box;
  user-select: none;

  border-bottom: 1px solid ${Colors.BLACK};
`;

export const ContentLeft = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, min-content) 80px;
  align-items: center;
  column-gap: 20px;
`;

export interface SCategoriesMenuPropTypes {
  isActive: boolean;
}

export const CategoriesContainer = styled.div<SCategoriesMenuPropTypes>`
  position: absolute;
  width: auto;
  top: 100%;
  left: 0;

  opacity: ${({ isActive }) => (isActive ? "1" : "0.5")};
  transition-property: opacity;
  transition-timing-function: linear;
  transition-duration: 0.15s;
`;

export const ContentRight = styled.div`
  display: grid;
  width: 400px;
  min-width: 350px;

  grid-template-columns: 1fr min-content;
  column-gap: 16px;
`;

export const IconsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;
