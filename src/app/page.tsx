import Banner from "@/components/Banner/Page";
import BrowseByCategory from "@/components/BrowseByCategory/page";
import FlashSale from "@/components/FlashSale/page";
import Navbar from "@/components/Header/page";
import ShopByCategory from "@/components/Header/ShopByCategory/ShopByCategory";
import JustAdded from "@/components/JustAdded/page";
import SummerDeal from "@/components/SummerDeal/page";
import TodayDeals from "@/components/TodayDeals/Page";

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
        <JustAdded/>
      </div>
    </div>
  );
}
