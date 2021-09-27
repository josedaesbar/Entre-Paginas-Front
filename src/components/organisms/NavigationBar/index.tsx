import * as S from "./styles";
import Logo from "../../../assets/img/utils/Logo.png";

import Icon from "@atoms/Icon";
import { Text } from "@atoms/Text";
import InputSearch from "@molecules/InputSearch";
import { Icons } from "@styles/Icons";
import { ImageAtom } from "@atoms/Image";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { useEffect, useRef, useState } from "react";
import CategoriesMenu from "@organisms/CategoriesMenu";

interface NavigationBarPropTypes {
  setIsActiveMenu(value: boolean): void;
}

const NavigationBar = ({ setIsActiveMenu }: NavigationBarPropTypes) => {
  const [isCategoriesActive, setIsCategoriesActive] = useState<boolean>(false);

  const categoryMenuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  /* useEffect(() => {
    const onClickWindow = (ev: MouseEvent) => {
      if (categoryMenuRef === null) return;
      if (iconRef === null) return;
      if (ev.target === null) return;
      if (isCategoriesActive === false) return;

      if (!categoryMenuRef.current?.contains(ev.target as Node)) {
        setIsCategoriesActive(false);
      }
    };

    window.addEventListener("click", onClickWindow);
  }, [categoryMenuRef, isCategoriesActive]); */

  const onPressMenu = () => {
    setIsActiveMenu(!isCategoriesActive);
    setIsCategoriesActive(!isCategoriesActive);
  };

  return (
    <S.Container>
      <S.ContentLeft>
        <Text
          fontSize={FontsSizes.SMALL_C}
          textColor={TColor.BLACK}
          fontWeight={FontsWeight.MEDIUM}
        >
          Categorias
        </Text>
        <S.IconContainer onClick={onPressMenu} ref={iconRef}>
          <Icon
            Icon={Icons.MENU}
            textColor={TColor.BLACK}
            size={FontsSizes.MEDIUM_B}
          />
        </S.IconContainer>

        <ImageAtom src={Logo} alt="" />

        <S.CategoriesContainer isActive={isCategoriesActive} ref={categoryMenuRef}>
          {isCategoriesActive && <CategoriesMenu />}
        </S.CategoriesContainer>
      </S.ContentLeft>

      <S.ContentRight>
        <InputSearch />
        <S.IconsContent>
          <S.IconContainer>
            <Icon
              Icon={Icons.PERSON}
              textColor={TColor.BLACK}
              size={FontsSizes.MEDIUM_B}
            />
          </S.IconContainer>
          <S.IconContainer>
            <Icon
              Icon={Icons.GIFT}
              textColor={TColor.BLACK}
              size={FontsSizes.MEDIUM_B}
            />
          </S.IconContainer>
          <S.IconContainer>
            <Icon
              Icon={Icons.BOOK}
              textColor={TColor.BLACK}
              size={FontsSizes.MEDIUM_B}
            />
          </S.IconContainer>
        </S.IconsContent>
      </S.ContentRight>
    </S.Container>
  );
};

export default NavigationBar;
