import { BannerSection } from "./BannerSection";
import { NewsSection } from "./NewsSection";
import { RecomendedSection } from "./RecomendedSection";
import { TopSellersSection } from "./TopSellersSection";

export const Home = () => {
  return (
    <>
      <BannerSection/>
      <TopSellersSection/>
      <RecomendedSection/>
      <NewsSection/>
    </>
  );
};
