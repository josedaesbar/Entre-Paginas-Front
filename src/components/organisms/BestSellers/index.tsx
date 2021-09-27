import * as S from "./styles";

import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import SelectCategory from "@molecules/SelectCategory";
import { useState } from "react";
import { Categories } from "application/types/Categories";
import BestProductsCategory from "@templates/BestProductsCategory";

const BestSellers = () => {
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
          Más vendidos
        </Text>

        <S.Select>
          <SelectCategory selectOption={onChangeCategory} />
        </S.Select>
      </S.FilterSellers>
      <BestProductsCategory />
    </S.Container>
  );
};

export default BestSellers;
