import * as S from "./styles";

import { Products } from "application/types/Products";

import Image from "next/image";
import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import StarsCalification from "@molecules/StarsCalification";

interface CardProductsPropTypes {
  product: Products;
}

const CardProducts = ({ product }: CardProductsPropTypes) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Image src={product.image} objectFit="cover" alt="" />
      </S.ImageContainer>
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
        <S.ButtonShop>
          <Text
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.WHITE}
          >
            Comprar
          </Text>
        </S.ButtonShop>
      </S.InformationContainer>
    </S.Container>
  );
};

export default CardProducts;
