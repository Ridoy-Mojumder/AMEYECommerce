import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const ButtonWithIcon = () => {
  return (
    <Button color="primary">
      <Menu /> Shop By Category
    </Button>
  );
};

export default ButtonWithIcon;
