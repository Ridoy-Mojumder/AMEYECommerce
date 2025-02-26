import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

interface ICardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  buttonClassName?: string;
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
}) => {
  return (
    <div className={` ${className}`}>
      <div className="relative w-full md:w-[347px] h-[180px] overflow-hidden rounded-xl shadow-lg">
        <Image
          src={imageUrl}
          alt="card-image"
          width={447}
          height={250}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col w-full justify-center items-center bg-black/10 text-center p-4">
          <h1 className={`text-2xl font-semibold ${titleClassName}`}>
            {title}
          </h1>
          {subtitle && (
            <h1 className={`text-lg font-medium ${subtitleClassName}`}>
              {subtitle}
            </h1>
          )}
          <Button
            variant="outline"
            className={`mt-4 border-0 border-b bg-transparent hover:bg-transparent ${buttonClassName}`}
          >
            Buy Now <MoveRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
