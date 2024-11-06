import Raffle from "./components/Raffle";
import Menu from "./components/menu/Menu";
import { useThemeStore } from "./stores/ThemeStore";

function App() {
  const theme = useThemeStore();
  return (
    <div
      className="h-screen relative w-full  bg-pink-400"
      style={
        theme.bg
          ? {
              backgroundImage: `url(${theme.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <Raffle />

      <Menu />
    </div>
  );
}

export default App;
