import { useState } from "react";
import { useThemeHandler } from "../../hooks/useThemeHandler";
import { useThemeStore } from "../../stores/ThemeStore";
import MenuHeaders from "./MenuHeaders";

const ButtonTextChange = () => {
  const theme = useThemeStore();
  const { handleChange } = useThemeHandler();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <MenuHeaders
        title="Change Button Text"
        headerType="h3"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      {isOpen && (
        <input
          className="bg-white text-black px-4 py-2 rounded-md"
          type="text"
          placeholder="Enter Button Text"
          value={theme.buttonText}
          onChange={handleChange("buttonText")}
        />
      )}
    </div>
  );
};

export default ButtonTextChange;
