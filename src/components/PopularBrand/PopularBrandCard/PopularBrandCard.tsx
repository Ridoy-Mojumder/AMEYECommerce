import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";

interface IPopularBrandCardProps {
  imageUrl: string | null;
  title: string;
  rating: number;
}

const PopularBrandCard: React.FC<IPopularBrandCardProps> = ({
  imageUrl,
  title,
  rating,
}) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition-all p-4 flex items-center space-x-4 w-full md:w-80 lg:w-96">
      {/* Brand Logo */}
      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center w-24 h-24">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            width={80}
            height={80}
            className="object-contain w-full h-full"
          />
        )}
      </div>

      {/* Brand Details */}
      <div className="flex flex-col">
        <h3 className="text-lg font-normal">{title}</h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < rating ? "text-[#FBBF24] fill-[#FBBF24]" : "text-gray-300"
              }
            />
          ))}
        </div>

        {/* Visit Store */}
        <a
          href="#"
          className="mt-2 text-sm font-normal text-primary flex items-center gap-2 "
        >
          Visit Store →
        </a>
        <div className="w-20 bg-primary h-[1px] "></div>
      </div>
    </div>
  );
};

export default PopularBrandCard;
