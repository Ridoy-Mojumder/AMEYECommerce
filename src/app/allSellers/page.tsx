import PopularBrandCard from "@/components/PopularBrand/PopularBrandCard/PopularBrandCard";
import React from "react";

const AllSellersPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap justify-between items-center gap-2 pb-4">
                <h1 className="text-xl md:text-3xl font-normal">All Sellers</h1>
            </div>
            <hr className="border-gray-300 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-4 my-4 md:my-8">
                <PopularBrandCard
                    imageUrl="/PopularBrand/pngwing 13 (1).png"
                    rating={3}
                    title="Rolex Brand"
                />
                <PopularBrandCard
                    imageUrl="/PopularBrand/pngwing 13 (2).png"
                    rating={3}
                    title="Calvin Klein Brand"
                />
                <PopularBrandCard
                    imageUrl="/PopularBrand/pngwing 13 (3).png"
                    rating={3}
                    title="Puma Brand"
                />
                <PopularBrandCard
                    imageUrl="/PopularBrand/pngwing 13 (4).png"
                    rating={3}
                    title="Polo Brand"
                />
                <PopularBrandCard
                    imageUrl="/PopularBrand/pngwing 13 (5).png"
                    rating={3}
                    title="Adidas Brand"
                />
                <PopularBrandCard
                    imageUrl="/PopularBrand/pngwing 13.png"
                    rating={3}
                    title="Puma Brand"
                />
            </div>
        </div>
    );
};

export default AllSellersPage;
