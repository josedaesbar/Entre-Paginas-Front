import { Text } from "@atoms/Text";
import NavigationBar from "@organisms/NavigationBar";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { FC, useState } from "react";
import * as S from "./styles";

const NavbarScreen: FC = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const toggleActiveMenu = (value: boolean) => {
    setIsMenuActive(value);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Announcementheader>
          <Text
            textColor={TColor.WHITE}
            fontWeight={FontsWeight.MEDIUM}
            fontSize={FontsSizes.SMALL_A}
          >
            Espacio para enlace de algún servico que se quiera resaltar
          </Text>
        </S.Announcementheader>
        <NavigationBar setIsActiveMenu={toggleActiveMenu} />
      </S.Header>
      <S.Content>
        {isMenuActive && <S.DarkSccreen />}
        {children}
      </S.Content>
    </S.Container>
  );
};

export default NavbarScreen;
