import CardProducts from "@organisms/CardProducts";
import { ProductsData } from "application/utils/ProductsData";
import * as S from "./styles";

const BestProductsCategory = () => {
  return (
    <S.Container>
      {ProductsData.map((v, i) => {
        if (i > 4) return;
        return <CardProducts key={i} product={v} />;
      })}
    </S.Container>
  );
};

export default BestProductsCategory;
