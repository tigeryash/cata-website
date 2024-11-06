import { useState } from "react";
import MenuHeaders from "./MenuHeaders";
import { useThemeStore } from "../../stores/ThemeStore";
import { HexColor } from "../../lib/types";

const colorConfig = {
  background: { display: "Background", themeKey: "bg" },
  font: { display: "Font", themeKey: "fontColor" },
  button: { display: "Button", themeKey: "buttonColor" },
  buttonText: { display: "Button Text", themeKey: "buttonTextColor" },
} as const;

const ChangeColors = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <MenuHeaders
        title="Change Colors"
        headerType="h2"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      {isOpen && (
        <div className="grid grid-cols-2 gap-4">
          {Object.values(colorConfig).map(({ display }) => (
            <ColorInput key={display} title={display} />
          ))}
        </div>
      )}
    </div>
  );
};

const ColorInput = ({ title }: { title: string }) => {
  const { updateTheme, ...theme } = useThemeStore();
  const config = Object.values(colorConfig).find((c) => c.display === title)!;
  // ! is used to ensure that the config is not undefined
  // config is used to set the value of the specific key in the colorConfig object

  return (
    <>
      <h3>{title}</h3>
      <input
        type="color"
        className="bg-white text-black cursor-pointer rounded-md"
        value={theme[config.themeKey] as HexColor}
        onChange={(e) => {
          updateTheme({
            [config.themeKey]: e.target.value as HexColor,
          });
        }}
      />
    </>
  );
};

export default ChangeColors;
