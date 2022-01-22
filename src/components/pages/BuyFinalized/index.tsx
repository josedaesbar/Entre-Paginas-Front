import * as S from "./styles";
import LOGO from "assets/img/utils/Logo.png";

import { H1, Span, Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { ImageAtom } from "@atoms/Image";
import StarsCalification from "@molecules/StarsCalification";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";
import { useState } from "react";
import CartItem from "@organisms/CartItem";
import CartResumen from "@organisms/CartResumen";
import { Button } from "@atoms/Buttons";
import { Colors } from "@styles/colors";

const BuyFinalized = () => {
  return (
    <S.Container>
      <S.ImageContainer>
        <ImageAtom src={LOGO} objectFit="cover" />
      </S.ImageContainer>
      <Icon
        Icon={Icons.CHECK_B}
        textColor={TColor.GREEN}
        size={FontsSizes.LARGE_C}
      />
      <Text
        fontSize={FontsSizes.MEDIUM_B}
        fontWeight={FontsWeight.MEDIUM}
        textColor={TColor.BLACK}
      >
        Recibimos tu pedido
      </Text>
      <Text
        fontSize={FontsSizes.MEDIUM_A}
        fontWeight={FontsWeight.THIN}
        textColor={TColor.BLACK}
      >
        Gracias por comprar en Entre Páginas
      </Text>
      <S.BoxMessage>
        <Span
          fontSize={FontsSizes.SMALL_C}
          fontWeight={FontsWeight.THIN}
          textColor={TColor.BLACK}
        >
          Puedes consultar el estado de tu pedido y la fecha o rango de horario en
          que podras recibirlo, a través de nuestro{" "}
          <Span
            fontSize={FontsSizes.SMALL_C}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Asistente Virtual.
          </Span>
        </Span>
        <Span
          fontSize={FontsSizes.MEDIUM_B}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
          textCenter
        >
          Pedido #000000-01
        </Span>
      </S.BoxMessage>
      <Span
        fontSize={FontsSizes.SMALL_C}
        fontWeight={FontsWeight.MEDIUM}
        textColor={TColor.BLACK}
        textCenter
      >
        Te enviaremos un correo con el detalle de tu compra a:
      </Span>
      <Span
        fontSize={FontsSizes.SMALL_C}
        fontWeight={FontsWeight.MEDIUM}
        textColor={TColor.BLACK}
        textCenter
      >
        Loremipsum@dolorsit.pe
      </Span>
      <S.ReturnHome href="/">
        <S.ButtonContainer>
          <Button buttonColor={Colors.RED}>
            <Span
              fontSize={FontsSizes.SMALL_C}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.WHITE}
              textCenter
            >
              Seguir comprando
            </Span>
          </Button>
        </S.ButtonContainer>
      </S.ReturnHome>
    </S.Container>
  );
};

export default BuyFinalized;
