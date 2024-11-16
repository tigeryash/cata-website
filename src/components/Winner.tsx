import { useThemeStore } from "../stores/ThemeStore";

export const Winner = ({
  user,
  setReset,
  setIsDrawing,
}: {
  user: string;
  setReset: (reset: boolean) => void;
  setIsDrawing: (isDrawing: boolean) => void;
}) => {
  const theme = useThemeStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen"
      style={{
        fontFamily: theme.customFont ? 'CustomFont, system-ui' : 'system-ui'
      }}
    >
      <h1 className="text-4xl font-bold">The Raffle Winner is...</h1>
      <h2 className="text-8xl font-bold ">{user}</h2>
      <div className="absolute bottom-10 space-x-4">
        <button
          style={{ color: theme.buttonTextColor,
            backgroundColor: theme.buttonColor,}}
          className="bg-pink-300 rounded-lg py-2 px-4 "
          onClick={() => setReset(true)}
        >
          Draw Again
        </button>

        <button
          style={{ color: theme.buttonTextColor,
            backgroundColor: theme.buttonColor,}}
          className="bg-pink-300 rounded-lg py-2 px-4"
          onClick={() => setIsDrawing(false)}
        >
          Edit Names
        </button>
      </div>
    </div>
  );
};
