import * as S from "./styles";
import Logo from "../../../assets/img/utils/Logo.png";

import Icon from "@atoms/Icon";
import { Span, Text } from "@atoms/Text";
import InputSearch from "@molecules/InputSearch";
import { Icons } from "@styles/Icons";
import { ImageAtom } from "@atoms/Image";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { useEffect, useRef, useState } from "react";
import { CategoriesData } from "application/utils/CategoriesData";

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
        <ImageAtom src={Logo} alt="" />

        <S.MenuList>
          <S.MenuItem>
            <Icon
              Icon={Icons.LIST}
              textColor={TColor.GRAY}
              size={FontsSizes.MEDIUM_B}
            />
            <Span
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.GRAY}
            >
              CATEGORIAS
            </Span>
          </S.MenuItem>
          <S.MenuItem>
            <Icon
              Icon={Icons.NOTIFICATION_FULL}
              textColor={TColor.GRAY}
              size={FontsSizes.MEDIUM_B}
            />
            <Span
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.GRAY}
            >
              PROXIMOS ESTRENOS
            </Span>
          </S.MenuItem>
          <S.MenuItem>
            <Icon
              Icon={Icons.PAPER}
              textColor={TColor.GRAY}
              size={FontsSizes.MEDIUM_B}
            />
            <Span
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.GRAY}
            >
              NOTICIAS
            </Span>
          </S.MenuItem>
        </S.MenuList>
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
