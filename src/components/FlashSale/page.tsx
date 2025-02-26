import React from "react";
import FlashSaleCard from "./FlashSaleCard";

const FlashSale = () => {
  return (
    <div className=" container mx-auto px-4 py-8  flex flex-wrap justify-between gap-4">
      <FlashSaleCard
        imageUrl="/Card/FlashSaleCard/pngwing.com (4) 2 (1).png"
        brand="Smartwool"
        title="Smartwool Winter Cotton V Type Full Shirt"
        price={95.0}
        reviews={3435}
        rating={4}
        sold={7}
        stock={16}
      />
      <FlashSaleCard
        imageUrl="/Card/FlashSaleCard/pngwing.com (4) 2.png"
        brand="Smartwool"
        title="Smartwool Winter Cotton V Type Full Shirt"
        price={95.0}
        reviews={3435}
        rating={4}
        sold={7}
        stock={16}
      />
      <FlashSaleCard
        imageUrl="/Card/FlashSaleCard/pngwing.com (4) 3.png"
        brand="Smartwool"
        title="Smartwool Winter Cotton V Type Full Shirt"
        price={95.0}
        reviews={3435}
        rating={4}
        sold={7}
        stock={16}
      />
      <FlashSaleCard
        imageUrl="/Card/FlashSaleCard/pngwing.com (4) 2 (2).png"
        brand="Smartwool"
        title="Smartwool Winter Cotton V Type Full Shirt"
        price={95.0}
        reviews={3435}
        rating={4}
        sold={7}
        stock={16}
      />
    </div>
  );
};

export default FlashSale;
