import React from 'react';
import CollectionCards from '../CollectionCards/page';
const productsData = [
    {
      imageUrl: "/WomansCollection/pngwing 12 (19).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 3,
    },
    {
      imageUrl: "/WomansCollection/pngwing 12 (20).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      newArrivals: true,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/WomansCollection/pngwing 12 (21).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/WomansCollection/pngwing 12 (22).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 5,
    },
  ];


const WomansCollection = () => {
    return (
        <div>
            <CollectionCards title='Women’s Collection' products={productsData}/>
        </div>
    );
};

export default WomansCollection;