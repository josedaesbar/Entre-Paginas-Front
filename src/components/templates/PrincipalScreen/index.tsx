import * as S from "./styles";

import NavigationBar from "@organisms/NavigationBar";
import Footer from "@templates/Footer";
import { FC, useState } from "react";

const PrincipalScreen: FC = ({ children }) => {
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
      <Footer />
    </S.Container>
  );
};

export default PrincipalScreen;
