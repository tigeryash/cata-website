import { ChevronDownIcon } from "@radix-ui/react-icons";

type HeaderType = "h2" | "h3"; // discriminated union

interface MenuHeadersProps {
  title: string;
  headerType: HeaderType;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const MenuHeaders = ({
  title,
  headerType,
  setIsOpen,
  isOpen,
}: MenuHeadersProps) => {
  return (
    <div className="flex items-center " onClick={() => setIsOpen(!isOpen)}>
      {headerType === "h3" ? (
        <h3 className="text-lg font-bold">{title}</h3>
      ) : (
        <h2 className="text-lg font-bold">{title}</h2>
      )}
      <button className="pl-2">
        <ChevronDownIcon
          className={`w-4 h-4 transition-all duration-300 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>
    </div>
  );
};

export default MenuHeaders;
