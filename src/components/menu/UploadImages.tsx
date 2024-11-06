import { useState } from "react";
import MenuHeaders from "./MenuHeaders";

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
          <ImageInput />
          <h3>Raffle Background</h3>
          <ImageInput />
        </>
      )}
    </>
  );
};

const ImageInput = () => {
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
      <input
        className="bg-white text-black px-4 py-2 rounded-md"
        type="file"
        accept="image/*"
        placeholder="Upload background Image"
        onChange={handleUpload}
      />
    </div>
  );
};

export default UploadImages;
