"use client";

import styles from "@/styles/navbar/DarkMode.module.scss";
import { useEffect, useState } from "react";

import { PiSun, PiMoon } from "react-icons/pi";

export default function DarkMode() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toogleTheme() {
    if (theme === "light") return setTheme("dark");
    setTheme("light");
  }

  return (
    <div className={styles.mode}>
      <button className={styles.mode_wrapper} onClick={toogleTheme} aria-label="Toogle style mode">
        <span
          className={`${styles.light} ${theme === "light" && styles.active}`}
        >
          <PiMoon />
        </span>
        <span className={`${styles.dark} ${theme === "dark" && styles.active}`}>
          <PiSun />
        </span>
      </button>
    </div>
  );
}
