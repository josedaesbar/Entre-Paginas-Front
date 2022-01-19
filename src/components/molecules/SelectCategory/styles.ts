import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const OptionsContainer = styled.div`
  position: absolute;

  z-index: 100;

  top: 100%;
  width: 100%;

  display: grid;
  grid-auto-rows: 35px;
  cursor: pointer;
  box-shadow: 0 0 5px ${Colors.GRAY_B};
  overflow: hidden;

  &:focus-visible {
    outline: 0;
  }

  & div:nth-child(1) {
    border-radius: 5px 5px 0 0;
  }

  & div:last-child {
    border-radius: 0 0 5px 5px;
  }
`;

export const ButtonSelect = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 15px;
  box-sizing: border-box;

  background-color: ${Colors.RED};
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
`;

export const SelectItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.WHITE};

  display: flex;
  align-items: center;

  user-select: none;

  padding: 5px 15px;
  box-sizing: border-box;

  &:hover {
    background-color: ${Colors.RED_B};
  }
`;
