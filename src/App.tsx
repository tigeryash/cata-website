import { useState } from "react";
import Upload from "./components/Upload";
import Raffle from "./components/Raffle";

function App() {
  const [bg, setBg] = useState<string>("");

  return (
    <div className="h-screen w-full">
      {bg ? (
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Raffle />
        </div>
      ) : (
        <Upload setBg={setBg} />
      )}
    </div>
  );
}

export default App;
