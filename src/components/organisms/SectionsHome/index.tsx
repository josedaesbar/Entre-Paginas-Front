import * as S from "./styles";

import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

import SectionsCarrusel from "@molecules/SectionsCarrusel";

const SectionsHome = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <Text
          fontSize={FontsSizes.MEDIUM_B}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
          textCenter
        >
          SECCIONES
        </Text>
        <Text
          fontSize={FontsSizes.SMALL_A}
          fontWeight={FontsWeight.THIN}
          textColor={TColor.GRAY}
          textCenter
        >
          Nuestros últimos productos publicados en la plataforma de comercio online.
        </Text>
      </S.TitleContainer>
      <SectionsCarrusel />
    </S.Container>
  );
};

export default SectionsHome;
