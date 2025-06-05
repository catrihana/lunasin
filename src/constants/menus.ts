import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineFolder } from 'react-icons/ai';

export const menus = [
  {
    name: 'dashboard',
    slug: 'pesanan',
    icon: MdOutlineDashboard,
    path: ['/', '/update-request', '/update-lists'],
  },
];
export const childMenus = [
  {
    parentSlug: 'pesanan',
    name: 'Request Perubahan',
    icon: '/static/icons/edit.svg',
    link: '/update-request',
  },
  {
    parentSlug: 'pesanan',
    name: 'Daftar Perubahan',
    icon: '/static/icons/task-square.svg',
    link: '/update-lists',
  },
  {
    parentSlug: 'pesanan',
    name: 'Daftar Transaksi',
    icon: '/static/icons/task-square.svg',
    link: '/transactions',
  },
];
