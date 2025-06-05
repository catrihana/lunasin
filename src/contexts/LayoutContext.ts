import { createContext } from 'react';

interface InterfaceLayoutContext {
  activeMenu: string;
  menuHandler?: (slug: string) => void;
  sideMenuOpen?: any;
  sideMenuHandler?: (isActive: any) => void;
}

const defaultValue = {
  activeMenu: 'dashboard',
};

export const LayoutContext =
  createContext<InterfaceLayoutContext>(defaultValue);
