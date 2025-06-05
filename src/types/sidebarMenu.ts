import { ReactNode } from 'react';

export interface IMenuItem {
  label: string;
  path: string;
  icon?: ReactNode;
  className?: string;
}

export interface IMenuGroup {
  name: string;
  icon?: ReactNode;
  menu: IMenuItem[];
}

export interface SideBarMenuItemProps {
  data: IMenuGroup;
}
