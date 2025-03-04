import Banner from "@/components/Banner/Page";
import BestSelling from "@/components/BestSelling/Page";
import BigSale from "@/components/BigSale/page";
import BrowseByCategory from "@/components/BrowseByCategory/page";
import FeaturedProductsSection from "@/components/FeaturedProducts/page";
import FlashSale from "@/components/FlashSale/page";
import FooterSection from "@/components/Footer/page";
import Navbar from "@/components/Header/page";
import ShopByCategory from "@/components/Header/ShopByCategory/ShopByCategory";
import JustAdded from "@/components/JustAdded";
import KidsCollection from "@/components/KidsCollection/page";
import MansCollection from "@/components/MenCollection/page";
import NewProducts from "@/components/NewProducts/page";
import PopularBrand from "@/components/PopularBrand/page";
import SummerDeal from "@/components/SummerDeal/page";
import TodayDeals from "@/components/TodayDeals/Page";
import WinterOutfitSection from "@/components/WinterOutfitSection/page";
import WomansCollection from "@/components/WomansCollection/page";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <ShopByCategory />
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
      <FooterSection />
    </main>
  );
}
