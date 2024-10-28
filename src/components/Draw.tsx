import { useEffect, useState } from "react";
import { Winner } from "./Winner";

type DrawProps = {
  usernames: string[];
  setIsDrawing: (isDrawing: boolean) => void;
};
const Draw = ({ usernames, setIsDrawing }: DrawProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    setReset(false);
    setSelected(Math.floor(Math.random() * usernames.length));
  }, [usernames, reset]);

  return (
    <div
      className={` flex" mx-auto
     max-w-2xl gap-6 justify-center items-center h-screen`}
    >
      <Winner
        user={usernames[selected!]}
        setReset={setReset}
        setIsDrawing={setIsDrawing}
      />
    </div>
  );
};

export default Draw;
