import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";

const ShopByCategory = () => {
  return (
    <div className="container mx-auto px-4 py-5 flex flex-wrap gap-2 justify-between lg:gap-16">
      <Button color="primary" className="text-sm md:text-lg max-w-screen-xl px-4">
        <Menu className="text-sm md:text-lg text-white" />
        Shop By Category
      </Button>
      <NavigationMenuDemo />
      <Button variant="outline" className="text-sm md:text-lg text-primary border-0 max-w-screen-xl  px-4">
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
  );
};

export default ShopByCategory;
