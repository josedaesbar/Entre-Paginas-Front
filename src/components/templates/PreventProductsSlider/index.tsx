import * as S from "./styles";

import CardProductsFull from "@organisms/CardProductsFull";
import { ProductsData } from "application/utils/ProductsData";
import { useEffect, useRef, useState } from "react";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";
import { FontsSizes, TColor } from "@styles/fonts";

const PreventProductsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const moveCarrousel = setInterval(() => {
      if (currentIndex === ProductsData.length - 3) {
        setCurrentIndex(0);
        changePositionSlider(0);
        return;
      }
      setCurrentIndex(currentIndex + 1);
      changePositionSlider(currentIndex + 1);
    }, 2250);

    return () => clearInterval(moveCarrousel);
  }, [currentIndex]);

  const carrouselRef = useRef<HTMLDivElement>(null);

  const onClickArrowNext = () => {
    if (currentIndex === ProductsData.length - 3) {
      setCurrentIndex(0);
      changePositionSlider(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
    changePositionSlider(currentIndex + 1);
  };

  const onClickArrowBack = () => {
    if (currentIndex === 0) {
      setCurrentIndex(ProductsData.length - 3);
      changePositionSlider(ProductsData.length - 3);
      return;
    }
    setCurrentIndex(currentIndex - 1);
    changePositionSlider(currentIndex - 1);
  };

  const changePositionSlider = (position: number) => {
    carrouselRef!.current!.style.transform = `translateX(${position * -34}%)`;
  };

  return (
    <S.Container>
      <S.ArrowsContainer onClick={onClickArrowBack}>
        <Icon
          Icon={Icons.ARROW_LEFT}
          textColor={TColor.BLACK}
          size={FontsSizes.LARGE_B}
        />
      </S.ArrowsContainer>
      <S.ContainerSlider>
        <S.SliderContent ref={carrouselRef}>
          {ProductsData.map((v, i) => {
            return (
              <S.ItemPrevent key={i}>
                <CardProductsFull product={v} />
              </S.ItemPrevent>
            );
          })}
        </S.SliderContent>
      </S.ContainerSlider>
      <S.ArrowsContainer right onClick={onClickArrowNext}>
        <Icon
          Icon={Icons.ARROW_RIGHT}
          textColor={TColor.BLACK}
          size={FontsSizes.LARGE_B}
        />
      </S.ArrowsContainer>
    </S.Container>
  );
};

export default PreventProductsSlider;
