import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem("chat-theme") || "light";
};

export const useThemeStore = create((set) => ({
  theme: getInitialTheme(),
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
    set({ theme });
  },
  initializeTheme: () => {
    const theme = getInitialTheme();
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
    set({ theme });
  },
}));
