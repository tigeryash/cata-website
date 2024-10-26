import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export const Winner = ({
  user,
  setFinished,
}: {
  user: string;
  setFinished: (finished: boolean) => void;
}) => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Confetti width={width} height={height} />
      <h1 className="text-4xl font-bold">The Raffle Winner is...</h1>
      <h2 className="text-8xl font-bold ">{user}</h2>
      <button
        className="bg-pink-300 rounded-lg py-2 px-4"
        onClick={() => setFinished(false)}
      >
        Draw Again
      </button>
    </div>
  );
};
