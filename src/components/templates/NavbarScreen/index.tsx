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
