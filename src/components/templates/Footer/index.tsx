import * as S from "./styles";

import { ImageAtom } from "@atoms/Image";

import Logo from "../../../assets/img/utils/Logo_BackRed.png";

const Footer = () => {
  return (
    <S.Container>
      <div>
        <ImageAtom src={Logo} alt="" />
      </div>
      <div></div>
      <div></div>
    </S.Container>
  );
};

export default Footer;
