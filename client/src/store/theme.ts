import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  themeToggle: () => void;
}

const useThemeStore = create<ThemeStore>((set) => {
  const storedTheme = (localStorage.getItem('theme-preference') as Theme) || 'light';
  
  return {

    theme: storedTheme,
    themeToggle: () => set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-preference', newTheme);

      return {theme: newTheme};
    }),

  }

});

export default useThemeStore;
