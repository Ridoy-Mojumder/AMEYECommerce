import React from 'react';
import CollectionCards from '../CollectionCards/page';

const productsData = [
    {
      imageUrl: "/NewProducts/pngwing 12 (10).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      newArrivals: true,
      reviewsCount: 34,
      rating: 3,
    },
    {
      imageUrl: "/NewProducts/pngwing 12 (11).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      newArrivals: true,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/NewProducts/pngwing 12 (28).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      newArrivals:true,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/NewProducts/pngwing 12 (29).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      newArrivals:true,
      reviewsCount: 34,
      rating: 5,
    },
  ];

const NewProducts = () => {
    return (
        <div>
            <CollectionCards title='New Products' products={productsData}/>
        </div>
    );
};

export default NewProducts;