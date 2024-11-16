import { useState, useEffect, useRef } from "react";
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
  const [color, setColor] = useColor(theme[config.themeKey] as HexColor);
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <h3>{title}</h3>
      <div 
        className="w-20 h-8 border-2 border-black rounded-lg shadow-lg relative" 
        style={{ backgroundColor: theme[config.themeKey] }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen && (
          <div 
            ref={pickerRef} 
            className="absolute -top-60 right-8 z-10" 
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <ColorPicker 
              color={color}
              onChange={(e) => {
                updateTheme({ [config.themeKey]: e.hex });
                setColor(e);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ChangeColors;
