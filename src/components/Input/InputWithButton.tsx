import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

const InputWithButton = () => {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input type="email" placeholder="I am shoping for..." />
      <Button type="submit" color="primary" className="text-white">
        <Image
          src="/icon/Vector.png"
          alt="this is search icon"
          height={24}
          width={24}
        />
      </Button>
    </div>
  );
};

export default InputWithButton;
