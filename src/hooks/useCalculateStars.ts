type useCalculateStarsType = {
  stars: number;
};

export const useCalculateStars = ({ stars }: useCalculateStarsType) => {
  const fillStarsArray = new Array(Math.floor(stars)).fill(true);
  const emptyStarsArray = new Array(5 - Math.floor(stars)).fill(false);

  const starsArray: boolean[] = fillStarsArray.concat(emptyStarsArray);

  return starsArray;
};
