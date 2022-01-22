import * as S from "./styles";
import PRODUCT_IMAGE from "assets/img/Products/Product_01.jpg";

import { H1, Span, Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { ImageAtom } from "@atoms/Image";
import StarsCalification from "@molecules/StarsCalification";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";
import { useState } from "react";
import CartItem from "@organisms/CartItem";
import CartResumen from "@organisms/CartResumen";

const Cart = () => {
  return (
    <S.Container>
      <H1
        fontSize={FontsSizes.MEDIUM_B}
        fontWeight={FontsWeight.BLACK}
        textColor={TColor.BLACK}
      >
        Resumen de la compra
      </H1>
      <S.Content>
        <S.Table>
          <S.RowHeader>
            <S.RowCell>
              <Span
                fontSize={FontsSizes.MEDIUM_A}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
                textCenter
              >
                FOTO
              </Span>
            </S.RowCell>
            <S.RowCell>
              <Span
                fontSize={FontsSizes.MEDIUM_A}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
                textCenter
              >
                NOMBRE
              </Span>
            </S.RowCell>
            <S.RowCell>
              <Span
                fontSize={FontsSizes.MEDIUM_A}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
                textCenter
              >
                PRECIO
              </Span>
            </S.RowCell>
            <S.RowCell>
              <Span
                fontSize={FontsSizes.MEDIUM_A}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
                textCenter
              >
                CANTIDAD
              </Span>
            </S.RowCell>
            <S.RowCell>
              <Span
                fontSize={FontsSizes.MEDIUM_A}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
                textCenter
              >
                SUBTOTAL
              </Span>
            </S.RowCell>
          </S.RowHeader>
          <CartItem />
          <CartItem />
          <CartItem />
        </S.Table>
        <CartResumen />
      </S.Content>
    </S.Container>
  );
};

export default Cart;
