import * as S from "./styles";

import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

import { memo } from "react";

interface CategoryItemMenuPropType {
  text: string;
  isActive: boolean;
  onMouseOver(): void;
}

const CategoryItemMenu = ({
  text,
  isActive,
  onMouseOver,
}: CategoryItemMenuPropType) => {
  return (
    <S.Container isActive={isActive} onMouseOver={onMouseOver}>
      <Text
        textColor={TColor.BLACK}
        fontSize={FontsSizes.SMALL_A}
        fontWeight={FontsWeight.MEDIUM}
      >
        {text}
      </Text>
    </S.Container>
  );
};

export default memo(CategoryItemMenu);
