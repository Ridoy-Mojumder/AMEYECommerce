import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ICardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  buttonClassName?: string;
  borderClassName?: string;
  onClick?: () => void;
}

const Card: React.FC<ICardProps> = ({
  title,
  subtitle,
  imageUrl,
  className,
  titleClassName,
  subtitleClassName,
  buttonClassName,
  borderClassName,
}) => {
  return (
    <div className={`w-full sm:w-[300px] md:w-[340px] lg:w-[370px] ${className}`}>
      <div className="relative w-full  overflow-hidden rounded-xl shadow-lg">
        <Image
          src={imageUrl}
          alt="card-image"
          width={447}
          height={250}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/10 text-center p-4">
          <h1 className={`text-xl sm:text-2xl font-semibold ${titleClassName}`}>
            {title}
          </h1>
          {subtitle && (
            <h2 className={`text-md sm:text-lg font-medium ${subtitleClassName}`}>
              {subtitle}
            </h2>
          )}
          <Button
            className={`bg-transparent rounded-none hover:bg-transparent border-0 ${buttonClassName}`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-center items-center gap-2">
                Buy Now <ArrowRight size={32} className="w-12 h-12" />
              </div>
              <div className={`w-16 h-[1px] ${borderClassName}`}></div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
