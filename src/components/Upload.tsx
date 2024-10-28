import { useState } from "react";
import "ldrs/ring";
import Loading from "./Loading";

type UploadProps = {
  setBg: (bg: string) => void;
  setNoBg: (noBg: boolean) => void;
};

const Upload = ({ setBg, setNoBg }: UploadProps) => {
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
    <div className="bg-pink-400 space-y-8 flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-8xl font-bold text-white">
        {tempBg ? "Replace Upload?" : "Upload your image"}
      </h1>
      {tempBg && <img src={tempBg} alt="uploaded" className="w-1/4" />}
      {uploading && <Loading />}
      <input
        className="bg-white text-black px-4 py-2 rounded-md"
        type="file"
        accept="image/*"
        placeholder="Upload background Image"
        onChange={handleUpload}
      />
      {tempBg && (
        <button
          className="bg-white text-black px-4 py-2 rounded-md"
          onClick={() => setBg(tempBg)}
        >
          Set Background
        </button>
      )}
      <button
        className="bg-white text-black px-4 py-2 rounded-md"
        onClick={() => {
          setNoBg(true);
          setBg("skip");
          console.log("pressed");
        }}
      >
        No Background
      </button>
    </div>
  );
};

export default Upload;
