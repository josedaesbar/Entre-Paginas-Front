import * as S from "./styles";

import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

interface SubCategoryItem extends S.SSubCategorieItemPropTypes {
  text: string;
  onMouseOver(): void;
}

const SubCategoryItem = ({ text, isActive, onMouseOver }: SubCategoryItem) => {
  return (
    <S.Container isActive={isActive} onMouseOver={onMouseOver}>
      <Text
        textColor={TColor.WHITE}
        fontSize={FontsSizes.SMALL_A}
        fontWeight={FontsWeight.MEDIUM}
      >
        {text}
      </Text>
    </S.Container>
  );
};

export default SubCategoryItem;
