import * as S from "../styles/HomeStyles";

import HomeCarrousel from "@molecules/HomeCarrousel";
import PrincipalScreen from "@templates/PrincipalScreen";
import BestSellers from "@organisms/BestSellers";
import PreventProductsHome from "@organisms/PreventProductsHome";
import RecomendedProductsHome from "@organisms/RecomendedProductsHome";
import EventsHome from "@organisms/EventsHome";
import SectionsHome from "@organisms/SectionsHome";

const Home = () => {
  return (
    <PrincipalScreen>
      <S.Container>
        <HomeCarrousel />
        <S.ContentItem>
          <BestSellers />
          <PreventProductsHome />
          <EventsHome />
          <RecomendedProductsHome />
          <SectionsHome />
        </S.ContentItem>
      </S.Container>
    </PrincipalScreen>
  );
};

export default Home;
