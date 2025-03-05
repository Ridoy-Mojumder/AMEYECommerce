import React from 'react';
import CollectionCards from '../CollectionCards';
import { getProducts } from '@/assets/product-data';



const NewProducts = () => {
  const productsData = getProducts({ type: "New Products" });
    return (
        <div>
            <CollectionCards title='New Products' products={productsData}/>
        </div>
    );
};

export default NewProducts;