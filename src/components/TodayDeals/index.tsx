import { getProducts } from "@/assets/product-data";
import CollectionCards from "../CollectionCards";

const TodayDeals = () => {
  const productsData = getProducts({ type: "Today's Deal" });

  return (
    <div>
      <CollectionCards title="Today's Deal" products={productsData} />
    </div>
  );
};

export default TodayDeals;
