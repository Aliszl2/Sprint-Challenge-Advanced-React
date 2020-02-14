import { useEffect } from "react";
import { useLocalStorage } from "./UseLocalStorage";

export const useDarkMode = (key, storedValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, storedValue);

  useEffect(() => {
    if (darkMode === true) {
      return document.querySelector("body").classList.add("dark-mode");
    } else {
      return document.querySelector("body").classList.remove("dark-mode");
    }
  });
  return [darkMode, setDarkMode];
};
