import React from 'react';
import CollectionCards from '../CollectionCards/page';

const productsData = [
    {
      imageUrl: "/BestSale/pngwing 12 (12).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 3,
    },
    {
      imageUrl: "/BestSale/pngwing 12 (13).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      newArrivals: true,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/BestSale/pngwing 12 (14).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/BestSale/pngwing 12 (26).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 5,
    },
  ];

const BestSelling = () => {
    return (
        <div>
            <CollectionCards title='Best Selling' products={productsData}/>
        </div>
    );
};

export default BestSelling;