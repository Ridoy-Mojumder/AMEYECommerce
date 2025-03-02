import React from "react";
import Card from "../Card/page";

const Cards = () => {
  return (
    <div className="container px-4 -mt-10 pb-10 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Levi’s Special"
          subtitle="25% OFF"
          imageUrl="/Card/Rectangle 342.png"
          className=""
          buttonClassName="text-black"
          borderClassName="bg-black"
          onClick={() => console.log("Card Clicked!")}
        />
        <Card
          title="Seiko Collection"
          subtitle="Best Watch For You"
          imageUrl="/Card/Rectangle 346.png"
          className="text-white hover:text-white"
          borderClassName="bg-white"
          onClick={() => console.log("Card Clicked!")}
        />
        <Card
          title="Seiko Collection"
          subtitle="25% OFF"
          imageUrl="/Card/card3.svg"
          className=""
          buttonClassName="text-black"
          borderClassName="bg-black"
          onClick={() => console.log("Card Clicked!")}
        />
      </div>
    </div>
  );
};

export default Cards;
