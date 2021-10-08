import type { NextPage } from "next";
import IntroduceComponents from "../components/HomeComponents/IntroduceComponents";
import FooterFilm from "../components/layout/footer";
import HeaderFilm from "../components/layout/header";
import SpecialFilmComponent from "../components/HomeComponents/SpecialFilmComponent";
import PricingComponent from "../components/HomeComponents/PricingComponent";
import LatestMovieComponent from "../components/HomeComponents/LatestMovieComponent";
import TopFilmComponent from "../components/HomeComponents/TopFilmComponent";
const Home: NextPage = () => {
  return (
    <>
      <HeaderFilm />
      <IntroduceComponents />
      <TopFilmComponent />
      <LatestMovieComponent />
      <LatestMovieComponent />
      <LatestMovieComponent />
      <SpecialFilmComponent />
      <PricingComponent />
      <FooterFilm />
    </>
  );
};

export default Home;
