import * as S from "./styles";

import Icon from "@atoms/Icon";
import { FontsSizes, TColor } from "@styles/fonts";
import { Icons } from "@styles/Icons";

const InputSearch = () => {
  return (
    <S.Container>
      <Icon Icon={Icons.SEARCH} size={FontsSizes.SMALL_C} textColor={TColor.GRAY} />
      <S.Input type="text" placeholder="Buscar" />
    </S.Container>
  );
};

export default InputSearch;
