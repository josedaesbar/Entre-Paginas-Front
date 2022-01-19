import { Colors } from "@styles/colors";
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 30px;

  margin-top: 50px;
  background-color: ${Colors.RED};
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  column-gap: 35px;
`;
