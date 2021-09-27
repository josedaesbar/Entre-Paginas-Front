import * as S from "./styles";

import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import PreventProductsSlider from "@templates/PreventProductsSlider";

const RecomendedProductsHome = () => {
  return (
    <S.Container>
      <S.FilterSellers>
        <Text
          fontSize={FontsSizes.MEDIUM_B}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
          textCenter
        >
          RECOMENDADOS
        </Text>
        <Text
          fontSize={FontsSizes.SMALL_A}
          fontWeight={FontsWeight.THIN}
          textColor={TColor.GRAY}
          textCenter
        >
          Nuestros últimos productos publicados en la plataforma de comercio online.
        </Text>
      </S.FilterSellers>
      <PreventProductsSlider />
    </S.Container>
  );
};

export default RecomendedProductsHome;
