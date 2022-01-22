import { Button } from "@atoms/Buttons";
import Icon from "@atoms/Icon";
import { Span, Text } from "@atoms/Text";
import { Colors } from "@styles/colors";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { Icons } from "@styles/Icons";
import { useState } from "react";
import * as S from "./styles";

const PayloadControls = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const operateNewQuantity = (currentQuantity: number) => () => {
    if (currentQuantity === -1 && quantity === 1) return;

    const newQuantity = quantity + currentQuantity;
    setQuantity(newQuantity);
  };

  return (
    <S.Container>
      <Text
        fontSize={FontsSizes.MEDIUM_B}
        fontWeight={FontsWeight.MEDIUM}
        textColor={TColor.BLACK}
        textCenter
      >
        Resumen de la compra
      </Text>

      <S.ControlsContainer>
        <S.TypeDelivery>
          <S.Logo />
          <S.DeliveryInfo>
            <Text
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.THIN}
              textColor={TColor.BLACK}
            >
              Titulo del libro
            </Text>
            <Text
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              S/ 00.00
            </Text>
          </S.DeliveryInfo>
        </S.TypeDelivery>
        <S.QuantityControl>
          <S.Quantity>
            <Span
              fontSize={FontsSizes.SMALL_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              {quantity}
            </Span>
          </S.Quantity>
          <S.ButtonControl isBorderBottom onClick={operateNewQuantity(1)}>
            <Icon
              Icon={Icons.ADD}
              textColor={TColor.BLACK}
              size={FontsSizes.MEDIUM_A}
            />
          </S.ButtonControl>

          <S.ButtonControl onClick={operateNewQuantity(-1)}>
            <Icon
              Icon={Icons.REMOVE}
              textColor={TColor.BLACK}
              size={FontsSizes.MEDIUM_A}
            />
          </S.ButtonControl>
        </S.QuantityControl>
      </S.ControlsContainer>
      <div>
        <S.PriceContainer>
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Subtotal
          </Span>

          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            S/ 00.00
          </Span>
        </S.PriceContainer>
        <S.PriceContainer>
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Costo de envio
          </Span>

          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            S/ 00.00
          </Span>
        </S.PriceContainer>
        <S.PriceContainer>
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Total normal
          </Span>

          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            S/ 00.00
          </Span>
        </S.PriceContainer>
      </div>
      <S.ButtonContainer>
        <S.AnchorLink href="/buy-finalized">
          <Button buttonColor={Colors.RED}>
            <Span
              fontSize={FontsSizes.MEDIUM_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.WHITE}
            >
              Comprar
            </Span>
          </Button>
        </S.AnchorLink>
      </S.ButtonContainer>
      <S.GiftList>
        <div></div>
        <Span
          fontSize={FontsSizes.SMALL_A}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          * Acumulas 00 puntos Bonus
        </Span>
      </S.GiftList>
    </S.Container>
  );
};

export default PayloadControls;
