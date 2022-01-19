import * as S from "./styles";

import { Categories } from "application/types/Categories";
import { CategoriesData } from "application/utils/CategoriesData";
import { useState } from "react";
import { Span } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { Icons } from "@styles/Icons";
import Icon from "@atoms/Icon";

interface FilterItemsExamplePropTypes {
  type: string;
}

const FilterItemsExample = ({ type }: FilterItemsExamplePropTypes) => {
  const [currentCategories, setCurrentCategories] =
    useState<Categories[]>(CategoriesData);

  const [categoriesSelected, setCategoriesSelected] = useState<Categories[]>([]);

  const onClickCheck = (category: Categories) => () => {
    const auxCategories = [...categoriesSelected];

    const isExistCategory = verifySelectedCategory(auxCategories, category);

    let newCategories: Categories[] = [];

    if (isExistCategory === true) {
      newCategories = deleteSelectedCategory(auxCategories, category);
    } else {
      auxCategories.push(category);
      newCategories = auxCategories;
    }

    setCategoriesSelected(newCategories);
  };

  const verifySelectedCategory = (
    auxCategories: Categories[],
    category: Categories
  ) => {
    const categoryExist = auxCategories.filter((v) => {
      const currentId = v.id;
      return category.id === currentId;
    });

    if (categoryExist.length > 0) return true;

    return false;
  };

  const deleteSelectedCategory = (
    auxCategories: Categories[],
    category: Categories
  ) => {
    const categoryExist = auxCategories.filter((v) => {
      const currentId = v.id;
      return category.id !== currentId;
    });

    return categoryExist;
  };

  return (
    <S.FilterItemContainer>
      <S.FilterHead>
        <Span
          fontSize={FontsSizes.SMALL_A}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.WHITE}
        >
          Filtrar por {type}
        </Span>
      </S.FilterHead>
      <S.FilterContent>
        {currentCategories.map((v, i) => {
          const isActive = verifySelectedCategory([...categoriesSelected], v);
          return (
            <S.FilterItem key={i} onClick={onClickCheck(v)}>
              <S.FilterCheck isActive={isActive}>
                {isActive && (
                  <Icon
                    Icon={Icons.CHECK}
                    size={FontsSizes.LARGE_A}
                    textColor={TColor.WHITE}
                  />
                )}
              </S.FilterCheck>
              {v.title}
            </S.FilterItem>
          );
        })}
      </S.FilterContent>
    </S.FilterItemContainer>
  );
};

export default FilterItemsExample;
