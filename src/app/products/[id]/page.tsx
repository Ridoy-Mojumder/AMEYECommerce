import React from "react";

interface IProductDetailsByIdProps {
  params?: { id?: string };
  // searchParams?: {};
}

const ProductDetailsById = ({ params }: IProductDetailsByIdProps) => {
  return (
    <div>
      <h1>Product id : {params?.id}</h1>
    </div>
  );
};

export default ProductDetailsById;
