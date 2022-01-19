import * as S from "styles/Pages/libraryStyles";

import PrincipalScreen from "@templates/PrincipalScreen";
import FilterItemsExample from "@organisms/FilterItem";
import { H1 } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import CardProductsFull from "@organisms/CardProductsFull";
import { ProductsData } from "application/utils/ProductsData";

const CategoriesPage = () => {
  return (
    <PrincipalScreen>
      <S.Container>
        <S.Filters>
          <H1
            fontSize={FontsSizes.MEDIUM_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            BIBLIOTECA
          </H1>
          <FilterItemsExample type="categoria" />
          <FilterItemsExample type="editorial" />
          <FilterItemsExample type="proveedor" />
        </S.Filters>
        <S.BooksContainer>
          {ProductsData.map((v, i) => (
            <CardProductsFull key={i} product={v} />
          ))}
          {ProductsData.map((v, i) => (
            <CardProductsFull key={i} product={v} />
          ))}
        </S.BooksContainer>
      </S.Container>
    </PrincipalScreen>
  );
};

export default CategoriesPage;
