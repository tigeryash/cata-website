import { ThemeState } from "../lib/types";
import { useThemeStore } from "../stores/ThemeStore";

export const useThemeHandler = () => {
  const { updateTheme } = useThemeStore();

  const handleChange =
    (key: keyof ThemeState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === "file" ? e.target.files?.[0] : e.target.value;

      updateTheme({ [key]: value });
    };

  return { handleChange };
};
