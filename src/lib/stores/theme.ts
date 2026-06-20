import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const THEME_MODES = ["light", "dark", "auto"] as const;

export type ThemeMode = (typeof THEME_MODES)[number];

const STORAGE_KEY = "theme";

function getInitialMode(): ThemeMode {
  if (!browser) return "auto";

  const stored = localStorage.getItem(STORAGE_KEY);

  return THEME_MODES.includes(stored as ThemeMode)
    ? (stored as ThemeMode)
    : "auto";
}

function applyTheme(mode: ThemeMode) {
  if (!browser) return;

  localStorage.setItem(STORAGE_KEY, mode);

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolved);
  document.documentElement.style.colorScheme = resolved;
  document.documentElement.setAttribute("data-theme", resolved);
}

function createThemeStore() {
  const { subscribe, set } = writable<ThemeMode>(getInitialMode());

  return {
    subscribe,

    set(mode: ThemeMode) {
      applyTheme(mode);
      set(mode);
    },

    init() {
      const mode = getInitialMode();
      applyTheme(mode);
      set(mode);
    },
  };
}

export const theme = createThemeStore();
