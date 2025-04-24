import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  themeToggle: () => void;
}

const useThemeStore = create((set) => ({
  theme: 'light',
  themeToggle: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
}));

export default useThemeStore;
