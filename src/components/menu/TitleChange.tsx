import { useState } from "react";
import { useThemeStore } from "../../stores/ThemeStore";
import MenuHeaders from "./MenuHeaders";

const TitleChange = () => {
  const { updateTheme, ...theme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTheme({ title: e.target.value });
  };
  return (
    <>
      <MenuHeaders
        title="Change Title"
        headerType="h2"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      {isOpen && (
        <input
          className="bg-white text-black px-4 py-2 rounded-md"
          type="text"
          placeholder="Enter Title"
          value={theme.title}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default TitleChange;
