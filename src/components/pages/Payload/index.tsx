import * as S from "./styles";

import { H1 } from "@atoms/Text";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";

import PayloadForm from "@organisms/PayloadForm";
import PayloadControls from "@organisms/PayloadControls";

const Payload = () => {
  return (
    <S.Container>
      <H1
        fontSize={FontsSizes.MEDIUM_B}
        fontWeight={FontsWeight.BLACK}
        textColor={TColor.BLACK}
      >
        METODO DE DESPACHO
      </H1>
      <S.Content>
        <PayloadForm />
        <PayloadControls />
      </S.Content>
    </S.Container>
  );
};

export default Payload;
