import * as S from "./styles";

import ProductCartControll from "@organisms/ProductCartControll";
import ProductCartInformation from "@organisms/ProductCartInformation";
import PreventProductsSlider from "@templates/PreventProductsSlider";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { Text } from "@atoms/Text";
import ProductCartCharacteristics from "@molecules/ProductCartCharacteristics";
import ProductComentaries from "@organisms/ProductComentaries";

interface BookPropTypes {
  bookId: string;
}

const BookName = ({ bookId }: BookPropTypes) => {
  return (
    <S.Container>
      <S.ContainerProduct>
        <ProductCartInformation />
        <ProductCartControll />
      </S.ContainerProduct>
      <S.SeparatorLine />
      <S.SameAutor>
        <Text
          fontSize={FontsSizes.MEDIUM_C}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
        >
          Libros del mismo autor
        </Text>
        <PreventProductsSlider />
      </S.SameAutor>
      <S.SeparatorLine />
      <ProductCartCharacteristics />
      <S.SeparatorLine />
      <ProductComentaries />
    </S.Container>
  );
};

export default BookName;
