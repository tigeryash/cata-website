import { useState } from "react";
import MenuHeaders from "./MenuHeaders";
import { useThemeStore } from "../../stores/ThemeStore";
import { HexColor } from "../../lib/types";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";



const colorConfig = {
  background: { display: "Background", themeKey: "bg" },
  font: { display: "Font", themeKey: "fontColor" },
  button: { display: "Button", themeKey: "buttonColor" },
  buttonText: { display: "Button Text", themeKey: "buttonTextColor" },
  textareaColor: { display: "Textarea", themeKey: "textareaColor" },
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
        <div className="grid grid-cols-1 gap-4">
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
  const [color, setColor] = useColor(theme[config.themeKey] as HexColor);
  // ! is used to ensure that the config is not undefined
  // config is used to set the value of the specific key in the colorConfig object

  return (
    <div className="flex flex-col ">
      <h3>{title}</h3>
      <ColorPicker 
        color={color}
        onChange={(e ) => {
          updateTheme({ [config.themeKey]: e.hex });
          setColor(e);
        }}
      />
    </div>
  );
};

export default ChangeColors;
