import Raffle from "./components/Raffle";
import Menu from "./components/menu/Menu";
import { useThemeStore } from "./stores/ThemeStore";

function App() {
  const theme = useThemeStore();
  return (
    <div
      className={`h-screen relative w-full  `}
      style={
        theme.bgImage
          ? {
              backgroundImage: `url(${theme.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: theme.fontColor,
            }
          : { backgroundColor: theme.bg, color: theme.fontColor }
      }
    >
      <Raffle />

      <Menu />
    </div>
  );
}

export default App;
