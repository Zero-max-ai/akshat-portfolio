import { create } from 'zustand';

type Menu = true | false;

interface MenuStore {
  menu: boolean,
  toggleMenu: () => void;
}

const useMenuStore = create((set) => ({
  menu: false,
  toggleMenu: () => set((state) => ({
    menu: !state.menu,
  }))
}))

export default useMenuStore;
