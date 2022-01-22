import * as S from "./styles";

import { Products } from "application/types/Products";

import Image from "next/image";
import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import StarsCalification from "@molecules/StarsCalification";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";
import { Button } from "@atoms/Buttons";
import { Colors } from "@styles/colors";

interface CardProductsFullPropTypes {
  product: Products;
}

const CardProductsFull = ({ product }: CardProductsFullPropTypes) => {
  return (
    <S.Container>
      <S.AnchorLink href="/book/example-code">
        <S.ImageContainer>
          <Image src={product.image} objectFit="cover" alt="" />
          {product.percentageDiscount && (
            <S.DicountContainer>
              <Text
                fontSize={FontsSizes.MEDIUM_C}
                fontWeight={FontsWeight.BLACK}
                textColor={TColor.WHITE}
              >
                {product.percentageDiscount}% Dscto
              </Text>
            </S.DicountContainer>
          )}
        </S.ImageContainer>
      </S.AnchorLink>
      <S.InformationContainer>
        <S.TitleProduct>
          <Text
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.BLACK}
            textColor={TColor.BLACK}
          >
            {product.name}
          </Text>
        </S.TitleProduct>

        <Text
          fontSize={FontsSizes.SMALL_A}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.GRAY}
        >
          {product.autor}
        </Text>
        <S.StarsContainer>
          <StarsCalification stars={product.stars} />
        </S.StarsContainer>
        <S.ProductPricesContainer>
          {product.percentageDiscount ? (
            <>
              <S.ProductPrice
                fontSize={FontsSizes.SMALL_C}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.GRAY}
                isDiscount
              >
                S/. {product.price}
              </S.ProductPrice>
              <S.ProductPrice
                fontSize={FontsSizes.SMALL_C}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
              >
                S/.{" "}
                {product.price - (product.price * product.percentageDiscount) / 100}
              </S.ProductPrice>
            </>
          ) : (
            <>
              <div></div>
              <Text
                fontSize={FontsSizes.SMALL_C}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
              >
                S/. {product.price}
              </Text>
            </>
          )}
        </S.ProductPricesContainer>
        <S.ButtonGiftContainer>
          <S.IconContainer>
            <Icon
              Icon={Icons.GIFT}
              size={FontsSizes.MEDIUM_A}
              textColor={TColor.BLACK}
            />
          </S.IconContainer>
          <S.ButtonContainer>
            <S.AnchorLink href="/book/example-code">
              <Button buttonColor={Colors.RED}>
                <Text
                  fontSize={FontsSizes.SMALL_C}
                  fontWeight={FontsWeight.MEDIUM}
                  textColor={TColor.WHITE}
                >
                  Comprar
                </Text>
              </Button>
            </S.AnchorLink>
          </S.ButtonContainer>
        </S.ButtonGiftContainer>
      </S.InformationContainer>
    </S.Container>
  );
};

export default CardProductsFull;
