import * as S from "./styles";
import PRODUCT_IMAGE from "assets/img/Products/Product_01.jpg";

import Icon from "@atoms/Icon";
import { ImageAtom } from "@atoms/Image";
import { Span } from "@atoms/Text";
import StarsCalification from "@molecules/StarsCalification";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { Icons } from "@styles/Icons";
import { useState } from "react";

const CartItem = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const operateNewQuantity = (currentQuantity: number) => () => {
    if (currentQuantity === -1 && quantity === 1) return;

    const newQuantity = quantity + currentQuantity;
    setQuantity(newQuantity);
  };

  return (
    <S.RowBody>
      <S.RowCell>
        <ImageAtom src={PRODUCT_IMAGE} objectFit="cover" />
      </S.RowCell>
      <S.NameItem>
        <Span
          fontSize={FontsSizes.SMALL_C}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          Titulo del libro
        </Span>
        <Span
          fontSize={FontsSizes.SMALL_B}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
        >
          Autor:{" "}
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Lorem ipsum dolor sit amet
          </Span>
        </Span>
        <S.MaxContent>
          <StarsCalification stars={3} />
        </S.MaxContent>
        <Span
          fontSize={FontsSizes.SMALL_B}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          Stock disponible 20
        </Span>
      </S.NameItem>
      <S.RowCell>
        <Span
          fontSize={FontsSizes.SMALL_C}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          S/ 00.00
        </Span>
      </S.RowCell>
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
      <S.RowCell>
        <Span
          fontSize={FontsSizes.SMALL_C}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          S/ 00.00
        </Span>
      </S.RowCell>
    </S.RowBody>
  );
};

export default CartItem;
