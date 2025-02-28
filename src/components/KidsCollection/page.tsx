import React from 'react';
import CollectionCards from '../CollectionCards/page';

const productsData = [
    {
      imageUrl: "/KidsCollection/pngwing 12 (23).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 3,
    },
    {
      imageUrl: "/KidsCollection/pngwing 12 (24).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      newArrivals: true,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/KidsCollection/pngwing 12 (25).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 5,
    },
    {
      imageUrl: "/KidsCollection/pngwing 12 (30).png",
      brand: "Jord",
      title: "Jord Round High Watch",
      price: 180.0,
      reviewsCount: 34,
      rating: 5,
    },
  ];


const KidsCollection = () => {
    return (
        <div>
            <CollectionCards title='Kid’s Collection' products={productsData}/>
        </div>
    );
};

export default KidsCollection;