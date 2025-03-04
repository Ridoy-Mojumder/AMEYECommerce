import { getProductById } from "@/assets/product-data";

interface IProductDetailsByIdProps {
  params?: { id?: string };
  // searchParams?: {};
}

const ProductDetailsById = ({ params }: IProductDetailsByIdProps) => {
  const productData = getProductById(Number(params?.id ?? -1));

  return (
    <div>
      <h1>Product id : {JSON.stringify(productData)}</h1>
    </div>
  );
};

export default ProductDetailsById;
