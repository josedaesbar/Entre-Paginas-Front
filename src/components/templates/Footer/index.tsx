import * as S from "./styles";

import { ImageAtom } from "@atoms/Image";

import Logo from "../../../assets/img/utils/Logo_BackRed.png";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { Span, Text } from "@atoms/Text";
import { Button } from "@atoms/Buttons";
import { Colors } from "@styles/colors";

const Footer = () => {
  return (
    <S.Container>
      <S.FooterFisrtColumn>
        <S.LogoContainer>
          <ImageAtom src={Logo} alt="" />
        </S.LogoContainer>
        <S.ContactContainer>
          <S.SocialIcons>
            <S.IconLink href="#" target={"_blank"}>
              <Icon
                Icon={Icons.FACEBOOK}
                size={FontsSizes.MEDIUM_C}
                textColor={TColor.WHITE}
              />
            </S.IconLink>
            <S.IconLink href="#" target={"_blank"}>
              <Icon
                Icon={Icons.INSTAGRAM}
                size={FontsSizes.MEDIUM_C}
                textColor={TColor.WHITE}
              />
            </S.IconLink>
            <S.IconLink href="#" target={"_blank"}>
              <Icon
                Icon={Icons.WHATSAPP}
                size={FontsSizes.MEDIUM_C}
                textColor={TColor.WHITE}
              />
            </S.IconLink>
          </S.SocialIcons>
          <Text
            fontSize={FontsSizes.SMALL_C}
            textColor={TColor.WHITE}
            fontWeight={FontsWeight.THIN}
            textCenter
          >
            ¿Necesitas ayuda?
          </Text>
          <Text
            fontSize={FontsSizes.MEDIUM_A}
            textColor={TColor.WHITE}
            fontWeight={FontsWeight.MEDIUM}
            textCenter
          >
            999 999 999
          </Text>
        </S.ContactContainer>
      </S.FooterFisrtColumn>
      <S.SecondColumn>
        <S.SubscribeContainer>
          <Text
            fontSize={FontsSizes.MEDIUM_A}
            textColor={TColor.WHITE}
            fontWeight={FontsWeight.MEDIUM}
            textCenter
          >
            Suscribete
          </Text>
          <S.InputSubscribeContainer>
            <S.InputSubscribe type={"email"} placeholder="Escribe tu correo" />
            <Button buttonColor={Colors.GRAY}>
              <Text
                fontSize={FontsSizes.SMALL_C}
                textColor={TColor.WHITE}
                fontWeight={FontsWeight.MEDIUM}
              >
                Enviar
              </Text>
            </Button>
          </S.InputSubscribeContainer>
        </S.SubscribeContainer>
        <S.InformationLists>
          <S.List>
            <S.ListItem isTitle>POLÍTICAS:</S.ListItem>
            <S.List>
              <S.ListItem>Políticas de privacidad</S.ListItem>
              <S.ListItem>Políticas de cookies</S.ListItem>
              <S.ListItem>Términos y condiciones</S.ListItem>
            </S.List>
          </S.List>
          <S.List>
            <S.ListItem isTitle>ATENCIÓN AL CLIENTE:</S.ListItem>
            <S.List>
              <S.ListItem>+01 000 0000</S.ListItem>
              <S.ListItem>LU-SA de 9:00 am a 6:00 pm</S.ListItem>
              <S.ListItem>Lorem ipsum@dolorsit.pe</S.ListItem>
            </S.List>
          </S.List>
        </S.InformationLists>
      </S.SecondColumn>
      <S.Link href="/complaints-book">
        <S.ThirdColumn>
          <Icon
            Icon={Icons.BOOK_B}
            textColor={TColor.WHITE}
            size={FontsSizes.LARGE_C}
          />
          <Span
            fontSize={FontsSizes.SMALL_C}
            textColor={TColor.WHITE}
            fontWeight={FontsWeight.THIN}
            textCenter
          >
            Libro de Reclamaciones
          </Span>
        </S.ThirdColumn>
      </S.Link>
    </S.Container>
  );
};

export default Footer;
