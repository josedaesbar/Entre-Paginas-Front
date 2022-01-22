import { Colors } from "@styles/colors";
import { PaddingHorizontal } from "@styles/constants";
import styled, { css } from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 75px;
  background-color: ${Colors.WHITE};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${PaddingHorizontal};
  box-sizing: border-box;
  user-select: none;

  box-shadow: 0 0 10px 0 ${Colors.GRAY_C};
`;

export const ContentLeft = styled.div`
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 90px min-content;
  align-items: center;
  column-gap: 60px;
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

export const LogoLink = styled.div`
  cursor: pointer;
`;

export const MenuList = styled.ul`
  display: flex;
  column-gap: 20px;
`;

interface SMenuItem {
  isActiveLink?: boolean;
}

export const MenuItem = styled.li<SMenuItem>`
  list-style: none;
  cursor: pointer;
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 5px;
  align-items: center;

  &:hover {
    & span {
      color: ${Colors.BLACK};
    }
  }

  ${({ isActiveLink }) =>
    isActiveLink &&
    css`
      & span {
        color: ${Colors.BLACK};
      }
    `};
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

export const AnchorLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ReturnHome = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
