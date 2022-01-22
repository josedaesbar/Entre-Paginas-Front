import { Button } from "@atoms/Buttons";
import Icon from "@atoms/Icon";
import { Span, Text } from "@atoms/Text";
import { Colors } from "@styles/colors";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { Icons } from "@styles/Icons";
import { useState } from "react";
import * as S from "./styles";

const CartResumen = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const operateNewQuantity = (currentQuantity: number) => () => {
    if (currentQuantity === -1 && quantity === 1) return;

    const newQuantity = quantity + currentQuantity;
    setQuantity(newQuantity);
  };

  return (
    <S.Container>
      <Text
        fontSize={FontsSizes.MEDIUM_A}
        fontWeight={FontsWeight.BLACK}
        textColor={TColor.BLACK}
      >
        Tu orden
      </Text>
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
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Total
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
        <S.AnchorLink href="/payload">
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
        <Icon
          Icon={Icons.GIFT}
          textColor={TColor.BLACK}
          size={FontsSizes.MEDIUM_A}
        />
        <Span
          fontSize={FontsSizes.SMALL_A}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          Añadir a mi lista de deseos
        </Span>
      </S.GiftList>
      <Span
        fontSize={FontsSizes.SMALL_A}
        fontWeight={FontsWeight.BLACK}
        textColor={TColor.BLACK}
      >
        * Acumulas 00 puntos Bonus
      </Span>
    </S.Container>
  );
};

export default CartResumen;
