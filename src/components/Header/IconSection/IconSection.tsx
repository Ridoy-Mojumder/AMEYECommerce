import Image from "next/image";
import React from "react";

const IconSection = () => {
  return (
    <div className="flex flex-wrap gap-[30px]">
      <Image
        src="/icon/Vector (1).png"
        alt="vector-01"
        height={36}
        width={36}
      />
      <Image src="/icon/Frame (3).png" alt="vector-01" height={36} width={36} />
      <div className="relative">
        <Image
          src="/icon/Vector (2).png"
          alt="vector-01"
          height={36}
          width={36}
        />
        <span className="absolute -top-5 -right-2 text-lg bg-primary text-white rounded-full w-7 h-7 flex justify-center items-center ">
          0
        </span>
      </div>
    </div>
  );
};

export default IconSection;
