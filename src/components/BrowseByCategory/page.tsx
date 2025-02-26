import React from "react";
import CategoryCard from "./CategoryCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BrowseByCategory = () => {
  return (
    <div className=" container mx-auto px-4 py-8 ">
      <div className="flex flex-wrap justify-between">
        <h1 className="text-3xl  pb-5">Browse By Category</h1>
        <div className="flex gap-1">
          <Button variant="outline" size="icon">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight />
          </Button>
        </div>
      </div>
      <hr className=" py-5" />
      <div className="flex flex-wrap justify-between items-center gap-[18px]">
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 12 (2).png"
          title="Men Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (2).png"
          title="Men Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (3).png"
          title="Men Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (4).png"
          title="Men Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (5).png"
          title="Men Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11.png"
          title="Men Fashion"
        />
      </div>
    </div>
  );
};

export default BrowseByCategory;
