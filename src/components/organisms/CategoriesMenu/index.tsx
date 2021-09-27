import { Text } from "@atoms/Text";
import CategoryItemMenu from "@molecules/CategoryItemMenu";
import SubCategoryItem from "@molecules/SubCategoryItem";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { CategoriesData } from "application/utils/CategoriesData";
import { MouseEventHandler, useRef, useState } from "react";
import * as S from "./styles";

export const CategoriesMenu = () => {
  const [currentOption, setCurrentOption] = useState<number>(0);
  const [currentSubCategorie, setCurrentSubCategorie] = useState<number>(0);

  const onHoverOption = (index: number) => () => {
    if (currentOption !== index) setCurrentSubCategorie(0);
    setCurrentOption(index);
  };

  const onHoverSubCategory = (index: number) => () => {
    setCurrentSubCategorie(index);
  };

  return (
    <S.Container>
      <S.TitlePadding>
        <Text
          textColor={TColor.BLACK}
          fontSize={FontsSizes.SMALL_C}
          fontWeight={FontsWeight.MEDIUM}
        >
          Mejores categorias
        </Text>
      </S.TitlePadding>
      <S.ItemsMenu>
        {CategoriesData.map((v, i) => (
          <CategoryItemMenu
            key={i}
            isActive={i === currentOption}
            onMouseOver={onHoverOption(i)}
            text={v.title}
          />
        ))}
      </S.ItemsMenu>
      <S.ItemOptionsContainer>
        {CategoriesData[currentOption].subCategories.map((v, i) => (
          <SubCategoryItem
            isActive={i === currentSubCategorie}
            onMouseOver={onHoverSubCategory(i)}
            key={i}
            text={v.title}
          />
        ))}
      </S.ItemOptionsContainer>
    </S.Container>
  );
};

export default CategoriesMenu;
