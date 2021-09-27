import * as S from "./styles";

import { IconType } from "react-icons";

interface IconPropsType extends S.StyleIconPropsType {
  Icon: IconType;
}

const Icon = ({ Icon, size, textColor }: IconPropsType) => {
  return (
    <S.IconContainer size={size} textColor={textColor}>
      {<Icon />}
    </S.IconContainer>
  );
};

export default Icon;
