import { useState } from "react";
import User from "./User";
import Draw from "./Draw";

const Raffle = () => {
  const [usernames, setUsernames] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const handleEnterUsers = () => {
    if (inputValue.trim()) {
      const newUsernames = inputValue
        .split(",")
        .map((name) => name.trim())
        .filter((name) => name !== "");
      setUsernames([...usernames, ...newUsernames]);
    }
  };

  const handleEditNames = () => {
    setInputValue("");
    setInputValue(usernames.join(", "));
    setUsernames([]);
  };

  const handleDraw = () => {
    setIsDrawing(true);
  };

  if (isDrawing) {
    return <Draw usernames={usernames} />;
  }

  if (!isDrawing) {
    return (
      <div className="flex flex-col items-center justify-center space-y-10 h-full">
        <h1 className="text-2xl font-bold ">Enter Usernames</h1>
        {usernames.length === 0 ? (
          <>
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
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={handleEnterUsers}
            >
              Enter names
            </button>
          </>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-4">
              {usernames.map((user, idx) => (
                <User
                  user={user}
                  key={idx}
                  setUsernames={setUsernames}
                  usernames={usernames}
                  idx={idx}
                />
              ))}
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={handleDraw}
              >
                Draw
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-md"
                onClick={handleEditNames}
              >
                Edit Names
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
};

export default Raffle;
