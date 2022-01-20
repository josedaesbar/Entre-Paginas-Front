import * as S from "./styles";

import { BannerImagesData } from "application/utils/BannerImagesData";
import Image_Section from "@assets/img/utils/Section.png";

import Image from "next/image";
import Icon from "@atoms/Icon";
import { Icons } from "@styles/Icons";
import { FontsSizes, FontsWeight, TColor } from "@styles/fonts";
import { useEffect, useRef, useState } from "react";
import { Button } from "@atoms/Buttons";
import { Colors } from "@styles/colors";
import { Span } from "@atoms/Text";

const SectionsCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const moveCarrousel = setInterval(() => {
      if (currentIndex === BannerImagesData.length - 1) {
        setCurrentIndex(0);
        changePositionSlider(0);
        return;
      }
      setCurrentIndex(currentIndex + 1);
      changePositionSlider(currentIndex + 1);
    }, 2000);

    return () => clearInterval(moveCarrousel);
  }, [currentIndex]);

  const carrouselRef = useRef<HTMLDivElement>(null);

  const onClickArrowNext = () => {
    if (currentIndex === BannerImagesData.length - 1) {
      setCurrentIndex(0);
      changePositionSlider(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
    changePositionSlider(currentIndex + 1);
  };

  const onClickArrowBack = () => {
    if (currentIndex === 0) {
      setCurrentIndex(BannerImagesData.length - 1);
      changePositionSlider(BannerImagesData.length - 1);
      return;
    }
    setCurrentIndex(currentIndex - 1);
    changePositionSlider(currentIndex - 1);
  };

  const onClickPointer = (index: number) => () => {
    setCurrentIndex(index);
    changePositionSlider(index);
  };

  const changePositionSlider = (position: number) => {
    carrouselRef!.current!.style.transform = `translateX(${position * -100}%)`;
  };

  return (
    <S.Container>
      <S.ContainerCarrousel ref={carrouselRef}>
        <S.ImageContainer>
          <S.ImagesContainer>
            <Image src={Image_Section} alt="" objectFit="cover" />
          </S.ImagesContainer>
        </S.ImageContainer>
        <S.ImageContainer>
          <S.ImagesContainer>
            <Image src={Image_Section} alt="" objectFit="cover" />
          </S.ImagesContainer>
        </S.ImageContainer>
        <S.ImageContainer>
          <S.ImagesContainer>
            <Image src={Image_Section} alt="" objectFit="cover" />
          </S.ImagesContainer>
        </S.ImageContainer>
        <S.ImageContainer>
          <S.ImagesContainer>
            <Image src={Image_Section} alt="" objectFit="cover" />
          </S.ImagesContainer>
        </S.ImageContainer>
      </S.ContainerCarrousel>
      <S.ArrowBack onClick={onClickArrowBack}>
        <Icon
          Icon={Icons.ARROW_LEFT}
          textColor={TColor.WHITE}
          size={FontsSizes.LARGE_B}
        />
      </S.ArrowBack>
      <S.ArrowNext onClick={onClickArrowNext}>
        <Icon
          Icon={Icons.ARROW_RIGHT}
          textColor={TColor.WHITE}
          size={FontsSizes.LARGE_B}
        />
      </S.ArrowNext>

      <S.PointImagesContainer>
        {BannerImagesData.map((v, i) => (
          <S.PointImage
            key={i}
            isActive={currentIndex === i}
            onClick={onClickPointer(i)}
          />
        ))}
      </S.PointImagesContainer>
      <S.ButtonContainer>
        <Button buttonColor={Colors.RED}>
          <Span
            fontSize={FontsSizes.SMALL_B}
            textColor={TColor.WHITE}
            fontWeight={FontsWeight.MEDIUM}
          >
            VER MÁS
          </Span>
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default SectionsCarrusel;
