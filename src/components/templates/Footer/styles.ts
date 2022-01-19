import { Colors } from "@styles/colors";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 50px;

  margin-top: 50px;
  background-color: ${Colors.RED};
  display: grid;
  grid-template-columns: 250px minmax(450px, 600px) 250px;
  justify-content: center;
  column-gap: 80px;
  align-items: center;
`;

export const FooterFisrtColumn = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content;
  row-gap: 15px;
`;

export const LogoContainer = styled.div`
  width: 100px;
  margin: auto;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  row-gap: 5px;
`;

export const SocialIcons = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 15px;
`;

export const IconLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const SecondColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content;
  row-gap: 50px;
`;

export const SubscribeContainer = styled.div`
  width: 100%;
  margin: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content;
  row-gap: 15px;
`;

export const InputSubscribeContainer = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr min-content;
  height: 35px;

  border-radius: 7.5px;
  overflow: hidden;
`;

export const InputSubscribe = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  border: none;
  outline: none;
  height: 100%;

  &:focus {
    border: none;
    outline: none;
  }

  font-family: var(--font);
  font-size: ${FontsSizes.SMALL_C};
  color: ${Colors.BLACK};
`;

export const InformationLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: grid;
  row-gap: 5px;
`;

interface SListItem {
  isTitle?: boolean;
}

export const ListItem = styled.li<SListItem>`
  list-style: none;
  font-family: var(--font);
  font-size: ${FontsSizes.SMALL_C};
  color: ${TColor.WHITE};
  font-weight: ${({ isTitle }) => (isTitle ? FontsWeight.MEDIUM : FontsWeight.THIN)};
`;

export const ThirdColumn = styled.a`
  width: 100%;
  height: min-content;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  row-gap: 10px;

  text-decoration: none;
  cursor: pointer;
`;
