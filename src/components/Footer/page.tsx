import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FooterSection = () => {
  return (
    <div className="bg-[#18181B] text-white px-4 py-10">
      <div className="container mx-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left ">
        {/* Logo & Contact Info */}
        <div className="space-y-4">
          <a href="">
            <Image
              src="/navbar/Logo 1 1 (1).png"
              alt="logo"
              width={176}
              height={48}
            />
          </a>
          <p className="text-gray-400">Block B, Road #24, Side A, New York</p>
          <p className="text-gray-400">001122121212121</p>
          <p className="text-gray-400">amey.use@gmail.com</p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-3">
            <Button className="bg-white hover:bg-white">
              <FaFacebookF className="cursor-pointer text-[#71717A]" />
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-500 text-lg">
              <FaTwitter className="cursor-pointer text-lg" />
            </Button>
            <Button className="bg-white hover:bg-white">
              <FaLinkedinIn className="cursor-pointer text-[#71717A]" />
            </Button>
            <Button className="bg-white hover:bg-white">
              <FaYoutube className="cursor-pointer text-[#71717A]" />
            </Button>
          </div>
        </div>

        {/* Information Links */}
        <div className="space-y-3">
          <h2 className="text-lg font-normal">Information</h2>
          <ul className="text-gray-400 space-y-2 cursor-pointer">
            <li className=" hover:text-white">About Us</li>
            <li className=" hover:text-white">Shop</li>
            <li className=" hover:text-white">Contact Us</li>
            <li className=" hover:text-white">Offers</li>
            <li className=" hover:text-white">Privacy Policy</li>
            <li className=" hover:text-white">Terms & Conditions</li>
          </ul>
        </div>

        {/* My Account Links */}
        <div className="space-y-3">
          <h2 className="text-lg font-normal">My Account</h2>
          <ul className="text-gray-400 space-y-2 cursor-pointer">
            <li className=" hover:text-white">My Profile</li>
            <li className=" hover:text-white">Cart</li>
            <li className=" hover:text-white">Wishlist</li>
            <li className=" hover:text-white">Checkout</li>
            <li className=" hover:text-white">Order Details</li>
            <li className=" hover:text-white">Order Tracking</li>
          </ul>
        </div>

        {/* Subscription & Payment */}
        <div className="space-y-4">
          <h2 className="text-lg font-normal">Subscribe</h2>
          <p className="text-gray-400">
            Be the first to get the latest news about trend promotions, and much
            more!
          </p>
          {/* Subscription Input */}
          <div className="relative">
            <Input
              className="w-full pr-16 bg-white text-black rounded-md"
              placeholder="Your email address"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent text-black px-4 py-1 rounded-md">
              JOIN
            </button>
          </div>
          <p className="text-gray-400">We Accept:</p>
          {/* Payment Methods */}
          <div className="flex justify-start sm:justify-center gap-3">
            <Button className="bg-white hover:bg-white">
              <Image src="/icon/visa 1.png" alt="visa" width={42} height={19} />
            </Button>
            <Button className="bg-white hover:bg-white">
              <Image
                src="/icon/visa 1 (1).png"
                alt="mastercard"
                width={42}
                height={19}
              />
            </Button>
            <Button className="bg-white hover:bg-white">
              <Image
                src="/icon/visa 1 (2).png"
                alt="paypal"
                width={42}
                height={19}
              />
            </Button>
            <Button className="bg-white hover:bg-white">
              <Image
                src="/icon/visa 1 (3).png"
                alt="discover"
                width={42}
                height={19}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-5 border-t border-gray-600 mt-6 pt-4 text-center flex flex-wrap justify-between items-center text-gray-400 text-sm">
        <p>Copyright © 2022 AMEY All Rights Reserved.</p>
        <p className="">Design & developed by Codeshaper</p>
      </div>
    </div>
  );
};

export default FooterSection;
