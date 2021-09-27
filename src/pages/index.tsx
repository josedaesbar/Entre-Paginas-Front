import * as S from "../styles/HomeStyles";

import HomeCarrousel from "@molecules/HomeCarrousel";
import NavbarScreen from "@templates/NavbarScreen";
import BestSellers from "@organisms/BestSellers";
import PreventProductsHome from "@organisms/PreventProductsHome";
import RecomendedProductsHome from "@organisms/RecomendedProductsHome";
import EventsHome from "@organisms/EventsHome";
import SectionsHome from "@organisms/SectionsHome";

const Home = () => {
  return (
    <NavbarScreen>
      <S.Container>
        <HomeCarrousel />
        <BestSellers />
        <PreventProductsHome />
        <EventsHome />
        <RecomendedProductsHome />
        <SectionsHome />
      </S.Container>
    </NavbarScreen>
  );
};

export default Home;
