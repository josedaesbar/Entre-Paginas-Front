import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min-content;
  column-gap: 75px;

  border-bottom: 2px solid ${Colors.GRAY_C};
  padding: 30px 0;
`;

export const UserComentary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 30px;
`;

export const UserImage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  border: 3px solid ${Colors.GRAY_C};
  overflow: hidden;
  box-sizing: border-box;
`;

export const ComentaryZone = styled.div`
  width: 100%;
  display: grid;
  row-gap: 15px;
`;

export const UserName = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 10px;
`;

export const ValorationContainer = styled.div`
  width: 250px;
  display: grid;
  row-gap: 25px;
  grid-auto-rows: min-content;
`;

export const ValorationItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MinContent = styled.div`
  width: max-content;
`;
