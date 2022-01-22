import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import * as S from "./styles";

const ProductCartCharacteristics = () => {
  return (
    <S.Container>
      <Text
        fontSize={FontsSizes.MEDIUM_B}
        fontWeight={FontsWeight.MEDIUM}
        textColor={TColor.BLACK}
      >
        Caracteristicas
      </Text>
      <S.ListContainer>
        <S.ListItem>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </S.ListItem>
        <S.ListItem>laoreet dolore magna aliquam volutpat.</S.ListItem>
        <S.ListItem>Lorem dolor sit amet, consectetuer adipiscing elit</S.ListItem>
        <S.ListItem>ullamcorper suscipit lobortis nisl ut aliquip ex ea</S.ListItem>
        <S.ListItem>Lorem ipsum dolor sit amet, consectetuer adipiscing</S.ListItem>
      </S.ListContainer>
    </S.Container>
  );
};

export default ProductCartCharacteristics;
