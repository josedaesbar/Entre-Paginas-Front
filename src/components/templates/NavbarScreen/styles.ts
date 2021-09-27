import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;

  display: grid;
  grid-auto-rows: min-content min-content;
`;

export const Announcementheader = styled.div`
  width: 100%;
  padding: 7.5px 0;
  box-sizing: border-box;

  background-color: ${Colors.BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
`;

export const DarkSccreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  background-color: ${Colors.BLACK};
  opacity: 0.35;
`;
