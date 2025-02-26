import React from "react";
import Card from "../Card/page";

const Cards = () => {
  return (
    <div className="container px-4 -mt-10 pb-10 flex flex-wrap justify-between items-center gap-4 mx-auto">
      <Card
        title="Levi’s Special"
        subtitle="25% OFF"
        imageUrl="/Card/Rectangle 342.png"
        className=""
        onClick={() => console.log("Card Clicked!")}
      />
      <Card
        title="Seiko Collection"
        subtitle="Best Watch For You"
        imageUrl="/Card/Rectangle 346.png"
        className="text-white hover:text-white"
        onClick={() => console.log("Card Clicked!")}
      />
      <Card
        title="Seiko Collection"
        subtitle="25% OFF"
        imageUrl="/Card/card3.svg"
        className=""
        onClick={() => console.log("Card Clicked!")}
      />
    </div>
  );
};

export default Cards;
