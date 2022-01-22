import * as S from "./styles";
import ICON from "assets/img/utils/Logo.png";

import { ImageAtom } from "@atoms/Image";
import { Span, Text } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import StarsCalification from "@molecules/StarsCalification";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";
import { Colors } from "@styles/colors";

const Comentary = () => {
  return (
    <S.Container>
      <S.UserComentary>
        <S.UserImage>
          <ImageAtom src={ICON} objectFit="cover" />
        </S.UserImage>
        <S.ComentaryZone>
          <S.UserName>
            <Text
              fontSize={FontsSizes.SMALL_C}
              fontWeight={FontsWeight.MEDIUM}
              textColor={TColor.BLACK}
            >
              Seudonimo
            </Text>
            <Span
              fontSize={FontsSizes.SMALL_B}
              fontWeight={FontsWeight.THIN}
              textColor={TColor.BLACK}
            >
              Hace 2 días
            </Span>
          </S.UserName>
          <Text
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.THIN}
            textColor={TColor.BLACK}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diamnonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel
            eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et
            iusto odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
            ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat
          </Text>
        </S.ComentaryZone>
      </S.UserComentary>
      <S.ValorationContainer>
        <Text
          fontSize={FontsSizes.MEDIUM_A}
          fontWeight={FontsWeight.MEDIUM}
          textColor={TColor.BLACK}
        >
          Valoracion general
        </Text>
        <S.ValorationItem>
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Precio
          </Span>
          <S.MinContent>
            <StarsCalification stars={3} />
          </S.MinContent>
        </S.ValorationItem>
        <S.ValorationItem>
          <Span
            fontSize={FontsSizes.SMALL_A}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Contenido
          </Span>
          <S.MinContent>
            <StarsCalification stars={5} />
          </S.MinContent>
        </S.ValorationItem>
        <S.ValorationItem>
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            Recomendar
          </Span>
          <Icon
            Icon={Icons.HEART}
            textColor={TColor.RED}
            size={FontsSizes.MEDIUM_B}
          />
          <Span
            fontSize={FontsSizes.SMALL_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
          >
            24
          </Span>
          <S.MinContent></S.MinContent>
        </S.ValorationItem>
      </S.ValorationContainer>
    </S.Container>
  );
};

export default Comentary;
