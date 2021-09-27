import * as S from "./styles";

import { useSelect } from "downshift";
import { CategoriesData } from "application/utils/CategoriesData";
import { useState } from "react";
import { Categories } from "application/types/Categories";
import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";

interface SelectCategoryPropTypes {
  selectOption(option: Categories): void;
}

const SelectCategory = ({ selectOption }: SelectCategoryPropTypes) => {
  const [currentOption, setCurrentOption] = useState<Categories>();

  const itemToString = (currentOptionSelect: Categories | null) =>
    currentOptionSelect!.title;

  const onClickOption = (option: Categories) => () => {
    setCurrentOption(option);
    selectOption(option);
  };

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: CategoriesData,
    itemToString: itemToString,
    defaultSelectedItem: currentOption,
  });

  return (
    <S.Container>
      <S.ButtonSelect {...getToggleButtonProps()}>
        <Text
          fontSize={FontsSizes.SMALL_C}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.WHITE}
        >
          {selectedItem ? itemToString(selectedItem) : CategoriesData[0].title}
        </Text>
        <Icon
          Icon={Icons.ARROW_SELECT}
          textColor={TColor.WHITE}
          size={FontsSizes.MEDIUM_B}
        />
      </S.ButtonSelect>
      <S.OptionsContainer {...getMenuProps()}>
        {isOpen &&
          CategoriesData.length > 0 &&
          CategoriesData.map((v, i) => (
            <S.SelectItem
              key={i}
              {...getItemProps({
                item: v,
                index: i,
                onClick: onClickOption(v),
              })}
            >
              <Text
                fontSize={FontsSizes.SMALL_A}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
              >
                {v.title}
              </Text>
            </S.SelectItem>
          ))}
      </S.OptionsContainer>
    </S.Container>
  );
};

export default SelectCategory;
