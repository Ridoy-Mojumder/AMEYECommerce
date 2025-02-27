import React from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../TodayDeals/ProductCard';

const JustAdded = () => {
    return (
        <div className="container mx-auto px-4 py-5">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center gap-2 py-4">
          <h1 className="text-3xl font-bold">Just Added</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
        <hr className="border-gray-300" />
  
        {/* Product Cards Section (Using Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center py-6">
          <ProductCard
            imageUrl="/JustAdded/pngwing 12 (21).png"
            brand="Jord"
            title="Jord Round High Watch"
            price={180.0}
            newArrivals={true}
            reviewsCount={34}
            rating={3}
          />
          <ProductCard
            imageUrl="/JustAdded/pngwing 12 (26).png"
            brand="Jord"
            title="Jord Round High Watch"
            price={180.0}
            newArrivals={true}
            reviewsCount={34}
            rating={5}
          />
          <ProductCard
            imageUrl="/JustAdded/pngwing 12 (5).png"
            brand="Jord"
            title="Jord Round High Watch"
            price={180.0}
            newArrivals={true}
            reviewsCount={34}
            rating={2}
          />
          <ProductCard
            imageUrl="/JustAdded/pngwing 12 (6).png"
            brand="Jord"
            title="Jord Round High Watch"
            price={180.0}
            newArrivals={true}
            reviewsCount={34}
            rating={4}
          />
        </div>
      </div>
    );
};

export default JustAdded;