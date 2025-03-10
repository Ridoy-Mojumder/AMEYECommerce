import React from "react";
import Card from "../Card";

const Cards = () => {
  return (
    <div className="container px-4 md:-mt-10 pb-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        <Card
          title="Levi’s Special"
          subtitle="25% OFF"
          imageUrl="/Card/Rectangle 342.png"
          className=""
          buttonClassName="text-black"
          borderClassName="bg-black"
          titleClassName="transform translate-x-40 sm:translate-x-44 lg:translate-x-52 flex flex-col justify-center items-start text-left"
          onClick={() => console.log("Card Clicked!")}
        />
        <Card
          title="Seiko Collection"
          subtitle="Best Watch For You"
          imageUrl="/Card/Rectangle 346.png"
          className="text-white hover:text-white"
          borderClassName="bg-white"
          titleClassName="flex flex-col justify-center items-center text-center"
          onClick={() => console.log("Card Clicked!")}
        />
        <Card
          title="Seiko Collection"
          subtitle="25% OFF"
          imageUrl="/Card/card3.svg"
          className=""
          buttonClassName="text-black"
          borderClassName="bg-black"
          titleClassName="transform translate-x-4 flex flex-col justify-center items-start text-left"
          onClick={() => console.log("Card Clicked!")}
        />
      </div>
    </div>
  );
};

export default Cards;
