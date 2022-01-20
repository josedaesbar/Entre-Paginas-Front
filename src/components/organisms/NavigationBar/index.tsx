import * as S from "./styles";
import Logo from "../../../assets/img/utils/Logo.png";

import Icon from "@atoms/Icon";
import { Span, Text } from "@atoms/Text";
import InputSearch from "@molecules/InputSearch";
import { Icons } from "@styles/Icons";
import { ImageAtom } from "@atoms/Image";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

interface NavigationBarPropTypes {
  setIsActiveMenu(value: boolean): void;
}

const NavigationBar = ({ setIsActiveMenu }: NavigationBarPropTypes) => {
  const route = useRouter();

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
        <S.LogoLink>
          <Link href="/" passHref>
            <ImageAtom src={Logo} alt="" />
          </Link>
        </S.LogoLink>

        <S.MenuList>
          <Link href="/library" passHref>
            <S.MenuItem isActiveLink={route.pathname.split("/")[1] === "library"}>
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
                BIBLIOTECA
              </Span>
            </S.MenuItem>
          </Link>
          <Link href="/next-releases" passHref>
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
          </Link>
          <Link href="/news" passHref>
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
          </Link>
        </S.MenuList>
      </S.ContentLeft>

      <S.ContentRight>
        <InputSearch />
        <S.IconsContent>
          <S.IconContainer>
            <Icon
              Icon={Icons.PERSON}
              textColor={TColor.GRAY}
              size={FontsSizes.MEDIUM_B}
            />
          </S.IconContainer>
          <S.IconContainer>
            <Icon
              Icon={Icons.GIFT}
              textColor={TColor.GRAY}
              size={FontsSizes.MEDIUM_B}
            />
          </S.IconContainer>
          <S.IconContainer>
            <Icon
              Icon={Icons.BOOK}
              textColor={TColor.GRAY}
              size={FontsSizes.MEDIUM_B}
            />
          </S.IconContainer>
        </S.IconsContent>
      </S.ContentRight>
    </S.Container>
  );
};

export default NavigationBar;
