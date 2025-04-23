import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface themeStore {
  theme: Theme,
  toggleTheme: () => void,
  setTheme: (theme: Theme) => void,
}

const useThemeStore = create((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
  setTheme: (theme: Theme) => set({theme}),
}));

export default useThemeStore;
