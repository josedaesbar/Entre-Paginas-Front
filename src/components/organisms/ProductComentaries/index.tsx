import * as S from "./styles";

import { Span, Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { Button } from "@atoms/Buttons";
import { Colors } from "@styles/colors";
import Comentary from "@organisms/Comentary";

const ProductComentaries = () => {
  return (
    <S.Container>
      <S.SessionRequired>
        <Text
          fontSize={FontsSizes.MEDIUM_B}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          COMENTAR Y VALORAR
        </Text>
        <S.ButtonContainer>
          <Button buttonColor={Colors.RED}>
            <Span
              fontSize={FontsSizes.MEDIUM_A}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.WHITE}
            >
              Iniciar sesión
            </Span>
          </Button>
        </S.ButtonContainer>
      </S.SessionRequired>
      <S.Comentaries>
        <Comentary />
        <Comentary />
        <Comentary />
        <Comentary />
        <Comentary />
      </S.Comentaries>
    </S.Container>
  );
};

export default ProductComentaries;
