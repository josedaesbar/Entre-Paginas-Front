import * as S from "./styles";

import { Products } from "application/types/Products";

import Image from "next/image";
import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import StarsCalification from "@molecules/StarsCalification";
import { Button } from "@atoms/Buttons";
import { Colors } from "@styles/colors";

interface CardProductsPropTypes {
  product: Products;
}

const CardProducts = ({ product }: CardProductsPropTypes) => {
  return (
    <S.Container>
      <S.AnchorLink href="/book/example-code">
        <S.ImageContainer>
          <Image src={product.image} objectFit="cover" alt="" />
        </S.ImageContainer>
      </S.AnchorLink>
      <S.InformationContainer>
        <Text
          fontSize={FontsSizes.SMALL_B}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
        >
          {product.name}
        </Text>
        <S.StarsContainer>
          <StarsCalification stars={product.stars} />
        </S.StarsContainer>

        <Text
          fontSize={FontsSizes.SMALL_B}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
        >
          S/. {product.price}
        </Text>

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
      </S.InformationContainer>
    </S.Container>
  );
};

export default CardProducts;
