import * as S from "./styles";

import { Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

import Image from "next/image";
import { EventsImagesData } from "application/utils/EventsData";

const EventsHome = () => {
  return (
    <S.Container>
      <S.FilterSellers>
        <Text
          fontSize={FontsSizes.MEDIUM_B}
          fontWeight={FontsWeight.BLACK}
          textColor={TColor.BLACK}
          textCenter
        >
          EVENTOS
        </Text>
        <Text
          fontSize={FontsSizes.SMALL_A}
          fontWeight={FontsWeight.THIN}
          textColor={TColor.GRAY}
          textCenter
        >
          Nuestros últimos productos publicados en la plataforma de comercio online.
        </Text>
      </S.FilterSellers>
      <S.ImagesContainer>
        {EventsImagesData.map((v, i) => (
          <Image key={i} src={v.url} alt="" objectFit="cover" />
        ))}
      </S.ImagesContainer>
    </S.Container>
  );
};

export default EventsHome;
