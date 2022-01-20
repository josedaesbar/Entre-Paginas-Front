import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: min-content;
  height: min-content;
  display: grid;
  grid-auto-columns: 350px;
  grid-template-rows: min-content min-content;
  row-gap: 15px;
  justify-content: center;
  justify-items: center;
  align-content: center;
  padding: 60px 100px;
  border: 5px solid ${Colors.RED_D};

  border-radius: 15px;
`;

export const LogoContainer = styled.div`
  width: 150px;
`;
