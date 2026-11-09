"use client";

import { useEffect, useState } from "react";

const storageKey = "adninja-theme";
type Theme = "light" | "dark";

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const update = () => setTheme(currentTheme());
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const followSystem = () => {
      try {
        if (window.localStorage.getItem(storageKey)) return;
      } catch {
        // System preference remains available when storage is blocked.
      }
      document.documentElement.dataset.theme = media.matches ? "dark" : "light";
      update();
    };
    const syncStorage = (event: StorageEvent) => {
      if (event.key !== storageKey) return;
      if (event.newValue === "dark" || event.newValue === "light") {
        document.documentElement.dataset.theme = event.newValue;
        update();
      } else {
        document.documentElement.dataset.theme = media.matches
          ? "dark"
          : "light";
        update();
      }
    };

    update();
    media.addEventListener("change", followSystem);
    window.addEventListener("storage", syncStorage);
    return () => {
      media.removeEventListener("change", followSystem);
      window.removeEventListener("storage", syncStorage);
    };
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(storageKey, next);
    } catch {
      // The current tab still switches theme if storage is blocked.
    }
    setTheme(next);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      aria-pressed={theme === "light"}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
      <span className="theme-label">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
