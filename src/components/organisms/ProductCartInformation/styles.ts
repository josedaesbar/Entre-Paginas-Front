import { Colors } from "@styles/colors";
import styled from "styled-components";

export const DetailProduct = styled.div`
  width: 100%;
  display: grid;
  row-gap: 30px;
`;

export const ProductInfoContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 350px 1fr;
  column-gap: 25px;
`;

export const InformationContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: 25px;
`;

export const InformationItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  row-gap: 10px;
`;

export const StarsContainer = styled.div`
  width: min-content;
`;

export const Stock = styled.div`
  width: 100%;
  padding: 10px 0 0 0;
  border-top: 1px solid ${Colors.GRAY_C};
`;
