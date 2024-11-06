import { useState } from "react";
import MenuHeaders from "./MenuHeaders";
import Loading from "../Loading";
import { useThemeStore } from "../../stores/ThemeStore";

const UploadImages = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <MenuHeaders
        title="Upload Images"
        headerType="h2"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      {isOpen && (
        <>
          <h3>Background</h3>
          <ImageInput name="bgImage" />
          <h3>Raffle Background</h3>
          <ImageInput name="raffleImage" />
        </>
      )}
    </>
  );
};

type name = "bgImage" | "raffleImage";

const ImageInput = ({ name }: { name: name }) => {
  const { updateTheme, ...theme } = useThemeStore();
  const [uploading, setUploading] = useState(false);
  const [tempBg, setTempBg] = useState<string>("");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploading(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setTempBg(dataUrl);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      {uploading && <Loading />}
      {tempBg && (
        <img
          src={tempBg}
          className="w-full h-[300px] object-cover"
          alt="temp"
        />
      )}
      <input
        className="bg-white text-black px-4 py-2 rounded-md"
        type="file"
        accept="image/*"
        placeholder="Upload background Image"
        onChange={handleUpload}
      />
      {tempBg && (
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              updateTheme({ ...theme, [name]: tempBg });
              console.log(theme[name]);
            }}
          >
            Save
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => {
              setTempBg("");
              updateTheme({ ...theme, [name]: "" });
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadImages;
