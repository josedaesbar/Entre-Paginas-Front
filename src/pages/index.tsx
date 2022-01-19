import * as S from "../styles/HomeStyles";

import { createGlobalStyle } from "styled-components";

import HomeCarrousel from "@molecules/HomeCarrousel";
import NavbarScreen from "@templates/NavbarScreen";
import BestSellers from "@organisms/BestSellers";
import PreventProductsHome from "@organisms/PreventProductsHome";
import RecomendedProductsHome from "@organisms/RecomendedProductsHome";
import EventsHome from "@organisms/EventsHome";
import SectionsHome from "@organisms/SectionsHome";
import Footer from "@templates/Footer";

const Home = () => {
  return (
    <NavbarScreen>
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
      <Footer />
    </NavbarScreen>
  );
};

export default Home;
