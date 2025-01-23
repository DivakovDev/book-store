import { BannerSection } from "./BannerSection";
import { NewsSection } from "./NewsSection";
import { RecomendedSection } from "./RecomendedSection";
import { SubscribeSection } from "./SubscribeSection";
import { TopSellersSection } from "./TopSellersSection";

export const Home = () => {
  return (
    <>
      <BannerSection/>
      <TopSellersSection/>
      <RecomendedSection/>
      <NewsSection/>
      <SubscribeSection/>
    </>
  );
};
