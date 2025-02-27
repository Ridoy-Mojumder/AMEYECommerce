import React from "react";
import CategoryCard from "./CategoryCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BrowseByCategory = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Browse By Category</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <hr className="border-gray-300 my-5" />

      {/* Category Cards Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 12 (2).png"
          title="Men Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (2).png"
          title="Women Fashion"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (3).png"
          title="Electronics"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (4).png"
          title="Accessories"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11 (5).png"
          title="Shoes"
        />
        <CategoryCard
          imageUrl="/Card/CategoryCard/pngwing 11.png"
          title="Beauty & Care"
        />
      </div>
    </div>
  );
};

export default BrowseByCategory;
