import Icon from "@atoms/Icon";
import { useCalculateStars } from "@hooks/useCalculateStars";
import { FontsSizes, TColor } from "@styles/fonts";
import { Icons } from "@styles/Icons";
import * as S from "./styles";

interface StarsCalificationPropTypes {
  stars: number;
}

const StarsCalification = ({ stars }: StarsCalificationPropTypes) => {
  const arrayStars = useCalculateStars({ stars });

  return (
    <S.Container>
      {arrayStars.map((v, i) => (
        <Icon
          key={i}
          Icon={v === true ? Icons.STAR_COMPLETE : Icons.STAR_EMPTY}
          textColor={TColor.BLACK}
          size={FontsSizes.SMALL_B}
        />
      ))}
    </S.Container>
  );
};

export default StarsCalification;
