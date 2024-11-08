import { useState } from "react";
import Draw from "./Draw";
import { useThemeStore } from "../stores/ThemeStore";

const Raffle = () => {
  const theme = useThemeStore();
  const [usernames, setUsernames] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const handleEnterUsers = () => {
    setIsDrawing(true);
    if (inputValue.trim()) {
      const newUsernames = inputValue
        .split(",")
        .map((name) => name.trim())
        .filter((name) => name !== "");
      setUsernames([...usernames, ...newUsernames]);
    }
  };

  if (isDrawing) {
    return <Draw usernames={usernames} setIsDrawing={setIsDrawing} />;
  }

  if (!isDrawing) {
    return (
      <div
        className="flex flex-col items-center justify-center space-y-10 h-[500px] w-[600px]"
        style={{
          backgroundImage: `url(${theme.raffleImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-2xl font-bold ">{theme.title}</h1>
        <textarea
          name="user list"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          rows={4}
          cols={50}
          placeholder="Ex. Catabaka, Catabaka2"
          className="border-2 border-gray-300 rounded-md p-2"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEnterUsers();
            }
          }}
        />
        <button
          className={` p-2 rounded-md`}
          onClick={handleEnterUsers}
          style={{
            backgroundColor: theme.buttonColor,
            color: theme.buttonTextColor,
          }}
        >
          Enter names
        </button>
      </div>
    );
  }
};

export default Raffle;
