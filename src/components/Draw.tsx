import { useEffect, useState } from "react";
import { Winner } from "./Winner";

type DrawProps = {
  usernames: string[];
};
const Draw = ({ usernames }: DrawProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    if (finished) return;
    const intervalId = setInterval(() => {
      setSelected(Math.floor(Math.random() * usernames.length));
    }, 300); // 0.3 seconds

    const timeoutId = setTimeout(() => {
      setFinished(true);
      clearInterval(intervalId);
    }, 4000); // 4 seconds

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [usernames, finished]);

  return (
    <div
      className={`${finished ? " flex" : "grid grid-cols-4"} mx-auto
     max-w-2xl gap-6 justify-center items-center h-screen`}
    >
      {finished ? (
        <>
          <Winner user={usernames[selected!]} setFinished={setFinished} />
        </>
      ) : (
        usernames.map((user, idx) => (
          <div
            key={idx}
            className={`text-2xl bg-pink-300 rounded-lg flex items-center justify-center py-4 px-6
            ${selected === idx ? "ring-pink-400 ring-4" : ""}`}
          >
            {user}
          </div>
        ))
      )}
    </div>
  );
};

export default Draw;
