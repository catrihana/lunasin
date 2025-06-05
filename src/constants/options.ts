import { Toption } from 'types/options';

export const BANK_LIST: Toption[] = [
  {
    value: 'BNI',
    label: 'BNI Virtual Account',
  },
  {
    value: 'MANDIRI',
    label: 'MANDIRI Virtual Account',
  },
  {
    value: 'BRI',
    label: 'BRI Virtual Account',
  },
  {
    value: 'BSI',
    label: 'BSI Virtual Account',
  },
  {
    value: 'BTNATM',
    label: 'BTN Virtual Account',
  },
  // {
  //   value: 'bca_va_billing_fixed',
  //   label: 'BCA',
  // },
];

export const PPN_LIST: Toption[] = [
  {
    value: 'buyer',
    label: 'Buyer',
  },
  {
    value: 'seller',
    label: 'Seller',
  },
];

export const STATUS_UPDATE: Toption[] = [
  {
    value: 'approved',
    label: 'Disetujui',
  },
  {
    value: 'waiting',
    label: 'Menunggu',
  },
  {
    value: 'rejected',
    label: 'Ditolak',
  },
];
