import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: min-content minmax(800px, 1fr) min-content;
`;

export const ContainerSlider = styled.div`
  width: 100%;
  overflow-x: clip;
  box-sizing: border-box;
`;

export const SliderContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 32%);
  box-sizing: border-box;
  column-gap: 2%;

  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: linear;
`;

export const ItemPrevent = styled.div`
  width: 100%;
  flex: none;
  box-sizing: border-box;
`;

interface SArrowsContainerPropTypes {
  right?: boolean;
}

export const ArrowsContainer = styled.div<SArrowsContainerPropTypes>`
  width: 40px;
  height: 75px;
  margin: auto 0;

  display: flex;
  justify-content: ${({ right }) => (right ? "flex-start" : "flex-end")};
  align-items: center;

  cursor: pointer;
`;
