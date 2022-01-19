import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  user-select: none;
`;

export const ContainerCarrousel = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  transition-property: transform;
  transition-duration: 0.15s;
`;

export const ImageContainer = styled.div`
  flex: none;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: 100%;
    height: 100%;
  }
`;

export const ArrowBack = styled.div`
  position: absolute;
  left: 0;
  width: 75px;
  height: 75px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  transition-property: background-color;
  transition-duration: 0.2s;

  & svg {
    margin-right: 5px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);

    & svg {
      filter: drop-shadow(0 0 10px ${Colors.WHITE});
    }
  }
`;

export const ArrowNext = styled.div`
  position: absolute;
  right: 0;
  width: 75px;
  height: 75px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  transition-property: background-color;
  transition-duration: 0.2s;

  & svg {
    margin-left: 5px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.6);

    & svg {
      filter: drop-shadow(0 0 10px ${Colors.WHITE});
    }
  }
`;

export const PointImagesContainer = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  column-gap: 12.5px;
  margin-bottom: 20px;
`;

interface PointImagePropTypes {
  isActive: boolean;
}

export const PointImage = styled.div<PointImagePropTypes>`
  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background-color: ${({ isActive }) => (isActive ? Colors.GRAY : Colors.WHITE)};
  border-radius: 100px;

  &:hover {
    background-color: ${Colors.GRAY_B};
  }
`;
