import { useState } from "react";
import MenuEditor from "./MenuEditor";
import MenuButton from "./MenuButton";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="fixed top-4 right-4 flex items-center justify-center rounded-lg text-black"
    >
      {!isOpen && <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />}

      <MenuEditor isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Menu;
