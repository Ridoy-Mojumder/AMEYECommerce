import Banner from "@/components/Banner/Page";
import BestSelling from "@/components/BestSelling/Page";
import BigSale from "@/components/BigSale/page";
import BrowseByCategory from "@/components/BrowseByCategory/page";
import FeaturedProductsSection from "@/components/FeaturedProducts/page";
import FlashSale from "@/components/FlashSale/page";
import FooterSection from "@/components/Footer/page";
import Navbar from "@/components/Header/page";
import ShopByCategory from "@/components/Header/ShopByCategory/ShopByCategory";
import JustAdded from "@/components/JustAdded/page";
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
    <div className="mx-auto">
      <div className=" top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
        <Navbar />
      </div>

      <div className="">
        <ShopByCategory />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <BrowseByCategory />
      </div>
      <div>
        <FlashSale />
      </div>
      <div className="py-16">
        <SummerDeal />
      </div>
      <div>
        <TodayDeals />
      </div>
      <div>
        <JustAdded />
      </div>
      <div>
        <BigSale />
      </div>
      <div>
        <FeaturedProductsSection />
      </div>
      <div>
        <NewProducts />
      </div>
      <div>
        <BestSelling />
      </div>
      <div>
        <WinterOutfitSection />
      </div>
      <div>
        <MansCollection />
      </div>
      <div>
        <WomansCollection />
      </div>
      <div>
        <KidsCollection />
      </div>
      <div>
        <PopularBrand />
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
}
