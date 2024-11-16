import { create } from "zustand";
import { ThemeState } from "../lib/types";

interface ThemeStore extends ThemeState {
  updateTheme: (updates: Partial<ThemeState>) => void;
  resetTheme: () => void;
}

const initialState: ThemeState = {
  bg: "#ffc3e3",
  title: "Enter usernames",
  fontColor: "#000000",
  buttonColor: "#3b82f6",
  buttonTextColor: "#ffffff",
  buttonText: "Draw",
  bgImage: "",
  raffleImage: "",
  textareaColor: "",
  customFont: "",
};

export const useThemeStore = create<ThemeStore>((set) => ({
  ...initialState,
  updateTheme: (updates) => set((state) => ({ ...state, ...updates })),
  resetTheme: () => set(initialState),
}));
