import { useState } from "react";
import Upload from "./components/Upload";
import Raffle from "./components/Raffle";

function App() {
  const [bg, setBg] = useState<string>("");
  const [noBg, setNoBg] = useState<boolean | null>(null);

  if (!bg) {
    return (
      <div className="h-screen w-full">
        <Upload setBg={setBg} setNoBg={setNoBg} />
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <div
        className={`h-full w-full bg-pink-400`}
        style={
          noBg
            ? {
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <Raffle />
      </div>
    </div>
  );
}

export default App;
