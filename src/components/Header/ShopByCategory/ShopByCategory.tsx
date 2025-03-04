import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";

const ShopByCategory = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      {/* Grid layout for responsiveness */}
      <div className="flex flex-wrap md:gap-4 justify-between items-center text-center">
        {/* Shop By Category Button */}
        <div className="w-full sm:w-auto">
          <Button
            color="primary"
            className="flex items-center gap-2 justify-center rounded-[5px] w-auto font-normal"
          >
            <Menu className="text-white" />
            Shop By Category
          </Button>
        </div>

        {/* Navigation Menu */}
        <div className="w-auto">
          <NavigationMenuDemo />
        </div>

        {/* Special Offer Button */}
        <div className="w-auto flex justify-start md:justify-end">
          <Button
            variant="outline"
            className="border-none text-primary hover:text-primary hover:bg-transparent flex items-center gap-2 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M6.331 8H17.67a2 2 0 0 1 1.977 2.304l-1.255 8.152A3 3 0 0 1 15.426 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8" />
                <path d="M9 11V6a3 3 0 0 1 6 0v5" />
              </g>
            </svg>
            Special Offer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
