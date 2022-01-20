import * as S from "styles/Pages/nextReleasesStyles";
import Logo from "assets/img/utils/Logo.png";

import PrincipalScreen from "@templates/PrincipalScreen";
import { ImageAtom } from "@atoms/Image";
import { Span } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

const nextReleases = () => {
  return (
    <PrincipalScreen>
      <S.Container>
        <S.Content>
          <S.LogoContainer>
            <ImageAtom src={Logo} alt="" />
          </S.LogoContainer>
          <Span
            fontSize={FontsSizes.MEDIUM_B}
            fontWeight={FontsWeight.MEDIUM}
            textColor={TColor.BLACK}
            textCenter
          >
            Esta sección está siendo trabajada
          </Span>
        </S.Content>
      </S.Container>
    </PrincipalScreen>
  );
};

export default nextReleases;
