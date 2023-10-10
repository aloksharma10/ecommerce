"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={`mt-1 lg:mx-2 rounded-md hover:scale-110 active:scale-100 duration-200 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <BsMoonStarsFill
          className="text-black text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BsFillSunFill
          className="text-white text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )}
    </button>
  );
};
