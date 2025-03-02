import React from "react";
import Image from "next/image";

const FeatureSection = () => {
  const features = [
    {
      imageUrl: "/icon/shipped 1.png",
      title: "Fast Free Delivery",
      description: "Free delivery for all orders over $120",
    },
    {
      imageUrl: "/icon/shipped 1 (1).png",
      title: "24/7 Support",
      description: "Our friendly 24/7 customer support.",
      highlight: true, // Apply red color to title
    },
    {
      imageUrl: "/icon/shipped 1 (2).png",
      title: "Return Policy",
      description: "We return money within just 30 days",
    },
    {
      imageUrl: "/icon/shipped 1 (3).png",
      title: "Positive Feedback",
      description: "90% clients' feedback is positive & happy",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="my-4 md:my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left pb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-12 h-12 flex-shrink-0">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="w-[1px] h-10 bg-gray-500"/>
              {/* Text Content */}
              <div>
                <h3
                  className={`text-lg font-semibold ${
                    feature.highlight ? "text-red-500" : "text-black"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-300" />
    </div>
  );
};

export default FeatureSection;
