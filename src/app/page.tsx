import Banner from "@/components/Banner/Page";
import BestSelling from "@/components/BestSelling";
import BigSale from "@/components/BigSale";
import BrowseByCategory from "@/components/BrowseByCategory";
import FeaturedProductsSection from "@/components/FeaturedProducts";
import FlashSale from "@/components/FlashSale";
import JustAdded from "@/components/JustAdded";
import KidsCollection from "@/components/KidsCollection";
import MansCollection from "@/components/MenCollection";
import NewProducts from "@/components/NewProducts";
import PopularBrand from "@/components/PopularBrand";
import TodayDeals from "@/components/TodayDeals";
import WinterOutfitSection from "@/components/WinterOutfitSection";
import WomansCollection from "@/components/WomansCollection";
import SummerDeal from "@/components/SummerDeal/index"

export default function Home() {
  return (
    <main className="">
      <Banner />
      <BrowseByCategory />
      <FlashSale />
      <SummerDeal />
      <TodayDeals />
      <JustAdded />
      <BigSale />
      <FeaturedProductsSection />
      <NewProducts />
      <BestSelling />
      <WinterOutfitSection />
      <MansCollection />
      <WomansCollection />
      <KidsCollection />
      <PopularBrand />
    </main>
  );
}
