import * as S from "./styles";

import Icon from "@atoms/Icon";
import { FontsSizes, TColor } from "@styles/fonts";
import { Icons } from "@styles/Icons";

const InputSearch = () => {
  return (
    <S.Container>
      <Icon
        Icon={Icons.SEARCH}
        size={FontsSizes.MEDIUM_B}
        textColor={TColor.BLACK}
      />
      <S.Input type="text" placeholder="Buscar" />
    </S.Container>
  );
};

export default InputSearch;
