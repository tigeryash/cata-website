import { HeartFilledIcon } from "@radix-ui/react-icons";

type MenuButtonProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MenuButton = ({ isOpen, setIsOpen }: MenuButtonProps) => {
  return (
    <HeartFilledIcon
      className={`w-8 h-8 ${
        isOpen ? "text-pink-700 " : "text-white mt-4 mr-4"
      } cursor-pointer hover:scale-110 transition-all duration-300
  active:scale-95 hover:text-pink-700 ml-auto
  `}
      onClick={() => setIsOpen(!isOpen)}
    />
  );
};

export default MenuButton;
