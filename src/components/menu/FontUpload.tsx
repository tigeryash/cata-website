import { useState } from "react";
import { useThemeStore } from "../../stores/ThemeStore";
import MenuHeaders from "./MenuHeaders";
import Loading from "../Loading";

const FontUpload = () => {
  const { updateTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(true);
  const [uploading, setUploading] = useState(false);

  const handleFontUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Font = event.target?.result as string;
        updateTheme({ customFont: base64Font });
        
        // Create and inject @font-face rule
        const fontFace = new FontFace('CustomFont', `url(${base64Font})`);
        fontFace.load().then((loadedFace) => {
          document.fonts.add(loadedFace);
          setUploading(false);
        }).catch((error) => {
          console.error('Error loading font:', error);
          setUploading(false);
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="font-sans"> {/* Force system font for menu */}
      <MenuHeaders
        title="Upload Custom Font"
        headerType="h2"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      {isOpen && (
        <div className="space-y-4">
          {uploading && <Loading />}
          <input
            className="bg-white text-black px-4 py-2 rounded-md w-full"
            type="file"
            accept=".ttf,.otf,.woff,.woff2"
            onChange={handleFontUpload}
          />
          <p className="text-sm text-gray-600">
            Supported formats: TTF, OTF, WOFF, WOFF2
          </p>
        </div>
      )}
    </div>
  );
};

export default FontUpload;
