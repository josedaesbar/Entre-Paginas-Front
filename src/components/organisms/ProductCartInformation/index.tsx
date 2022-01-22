import * as S from "./styles";
import PRODUCT_IMAGE from "assets/img/Products/Product_01.jpg";

import { ImageAtom } from "@atoms/Image";
import { H1, Span, Text } from "@atoms/Text";
import StarsCalification from "@molecules/StarsCalification";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

const ProductCartInformation = () => {
  return (
    <S.DetailProduct>
      <H1
        fontSize={FontsSizes.MEDIUM_B}
        fontWeight={FontsWeight.BLACK}
        textColor={TColor.BLACK}
      >
        DETALLE DEL PRODUCTO
      </H1>
      <S.ProductInfoContent>
        <ImageAtom src={PRODUCT_IMAGE} objectFit="cover" />
        <S.InformationContainer>
          <S.InformationItem>
            <Text
              fontSize={FontsSizes.MEDIUM_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              PONTIUS PILATE
            </Text>
            <Span
              fontSize={FontsSizes.SMALL_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              Autor: Lorem ipsum dolor sit amet
            </Span>
          </S.InformationItem>
          <S.InformationItem>
            <Text
              fontSize={FontsSizes.SMALL_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              RESUMEN GENERAL
            </Text>
            <Span
              fontSize={FontsSizes.SMALL_A}
              fontWeight={FontsWeight.THIN}
              textColor={TColor.BLACK}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
              volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
              zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
              dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
              suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </Span>
          </S.InformationItem>
          <S.InformationItem>
            <S.StarsContainer>
              <StarsCalification stars={3} />
            </S.StarsContainer>
            <Span
              fontSize={FontsSizes.SMALL_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              * Acumulas 00 puntos Bonus
            </Span>
            <S.Stock>
              <Span
                fontSize={FontsSizes.SMALL_A}
                fontWeight={FontsWeight.MEDIUM}
                textColor={TColor.BLACK}
              >
                Stock disponible 20 unidades
              </Span>
            </S.Stock>
          </S.InformationItem>
        </S.InformationContainer>
      </S.ProductInfoContent>
    </S.DetailProduct>
  );
};

export default ProductCartInformation;
