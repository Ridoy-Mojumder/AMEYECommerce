import Image from "next/image";
import React from "react";
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
    <div className={`w-full ${className}`}>
      <div className="relative w-full  overflow-hidden rounded-xl shadow-lg">
        <Image
          src={imageUrl}
          alt="card-image"
          width={447}
          height={250}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0  ${titleClassName}`}>
          <h1 className={`text-md md:text-xl lg:text-2xl font-normal `}>
            {title}
          </h1>
          {subtitle && (
            <h2
              className={`text-sm sm:text-lg font-normal ${subtitleClassName}`}
            >
              {subtitle}
            </h2>
          )}
          <a
            className={`bg-transparent rounded-none hover:bg-transparent border-0 text-sm sm:text-lg  ${buttonClassName}`}
          >
            <div className="flex flex-col">
              <div className="flex justify-start items-center ">
                Buy Now <ArrowRight size={42} className="w-12 h-4" />
              </div>
              <div className={`w-16 h-[1px] ${borderClassName}`}></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
