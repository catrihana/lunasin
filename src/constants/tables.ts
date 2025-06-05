import { TFormTable } from 'types/tables';

export const REVISION_LIST: TFormTable[] = [
  {
    label: 'Pengiriman',
    key: 'shipping_cost',
    isUpdate: false,
  },
  {
    label: 'Diskon pengiriman',
    key: 'shipping_discount',
    isUpdate: false,
  },
  {
    label: 'PPH pengiriman',
    key: 'shipping_pph',
    isUpdate: false,
  },
  {
    label: 'PPH',
    key: 'pph',
    isUpdate: false,
  },
  {
    label: 'PPN Dipungut',
    key: 'ppn_by',
    isUpdate: false,
  },
  {
    label: 'PPN',
    key: 'ppn',
    isUpdate: false,
  },
  {
    label: 'Total',
    key: 'total',
    isUpdate: true,
  },
  {
    label: 'Bank',
    key: 'payment_method',
    isUpdate: false,
  },
  {
    label: 'Catatan',
    key: 'reason',
    isUpdate: true,
  },
];
