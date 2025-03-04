import Link from "next/link";

const ProductListPage = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        List of product:
        <Link href={"/products/1"}>1</Link>
        <Link href={"/products/2"}>2</Link>
        <Link href={"/products/3"}>3</Link>
        <Link href={"/products/4"}>4</Link>
        <Link href={"/products/5"}>5</Link>
      </div>
    </div>
  );
};

export default ProductListPage;
