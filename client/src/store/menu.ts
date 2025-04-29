import { create } from 'zustand';

interface MenuStore {
  menu: boolean,
  toggleMenu: () => void;
}

const useMenuStore = create<MenuStore>((set) => ({
  menu: false,
  toggleMenu: () => set((state) => ({
    menu: !state.menu,
  }))
}))

export default useMenuStore;
