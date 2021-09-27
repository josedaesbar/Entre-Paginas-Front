import * as S from "./styles";

import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import SelectCategory from "@molecules/SelectCategory";
import { useState } from "react";
import { Categories } from "application/types/Categories";
import BestProductsCategory from "@templates/BestProductsCategory";
import PreventProductsSlider from "@templates/PreventProductsSlider";

const PreventProductsHome = () => {
  const [currentOption, setCurrentOption] = useState<Categories>();

  const onChangeCategory = (option: Categories) => {
    setCurrentOption(option);
  };

  return (
    <S.Container>
      <S.FilterSellers>
        <Text
          fontSize={FontsSizes.MEDIUM_B}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
          textCenter
        >
          PREVENTA
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

export default PreventProductsHome;
