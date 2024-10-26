import { Pencil1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

type UserProps = {
  user: string;
  setUsernames: (usernames: string[]) => void;
  idx: number;
  usernames: string[];
};

const User = ({ user, setUsernames, idx, usernames }: UserProps) => {
  const [clicked, setClicked] = useState<boolean>(false);

  const updateUsername = (index: number, newValue: string) => {
    const updatedUsernames = [...usernames];
    updatedUsernames[index] = newValue;
    setUsernames(updatedUsernames);
  };
  return (
    <div
      className="flex items-center justify-center hover:backdrop-blur-lg
     hover:bg-pink/40 hover:cursor-pointer hover:shadow-lg rounded-md p-4 group"
    >
      {clicked ? (
        <input
          type="text"
          value={user}
          onChange={(e) => updateUsername(idx, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setClicked(false);
            }
          }}
        />
      ) : (
        <>
          <h1>{user}</h1>
          <Pencil1Icon
            onClick={() => setClicked(!clicked)}
            className="group-hover:visible invisible w-3 h-3"
          />
        </>
      )}
    </div>
  );
};

export default User;
