import Image from "next/image";
import React from "react";

interface ICategoryCardProps {
  title: string;
  imageUrl: string;
  className?: string;
  titleClassName?: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({
  title,
  imageUrl,
  className = "",
  titleClassName = "",
  onClick,
}) => {
  return (
    <div
      className={`bg-[#F5F5F4] rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4 flex flex-col items-center justify-center mx-auto cursor-pointer w-full md:w-[195px] h-[250px] ${className}`}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="w-full md:w-40 h-44 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={title}
          width={120}
          height={80}
          className=" object-cover"
        />
      </div>

      {/* Title */}
      <h1 className={`mt-3 text-lg font-semibold text-gray-700 text-center ${titleClassName}`}>
        {title}
      </h1>
    </div>
  );
};

export default CategoryCard;
