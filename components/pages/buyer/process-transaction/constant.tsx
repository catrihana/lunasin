const thTable = [
  'Nomor Invoice',
  'Nominal',
  'Tanggal Invoice',
  'Tanggal Jatuh Tempo',
  'Aksi',
  'Pengajuan',
];

const menu = [
  {
    label: 'Jatuh Tempo',
    value: 'OVERDUE',
  },
  {
    label: 'Penagihan',
    value: 'BILLING',
  },
  {
    label: 'Menunggu Pembayaran',
    value: 'PAYMENT_PENDING',
  },
];

const lateDays = (val: any) => {
  const remainDays = val?.remain_days;
  const lateDays = val?.late_days;
  const remainValue = remainDays?.replaceAll('h', 'H');
  const lateValue = lateDays?.replaceAll('h', 'H');
  const value = remainDays || lateDays;

  return value === 'Nan' || value === 'null' || value === '' || !value
    ? '-'
    : remainDays?.startsWith('-') || lateValue
      ? `Telat ${value?.replaceAll('-', '')}`
      : `${remainValue} Lagi`;
};

export { thTable, menu, lateDays };

export default () => {};
