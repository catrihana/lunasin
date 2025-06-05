export const npwpFormatter = (value: any) => {
  return value?.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/,
    '$1.$2.$3.$4-$5.$6',
  );
};

export const convertRupiah = (subject = 0) => {
  if (subject === null) {
    subject = 0;
  }
  const rupiah = subject.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  return `Rp${rupiah}`;
};

export const renderPrice = (value: string | number) => {
  if (value) {
    return `Rp${value
      ?.toString()
      .split(/(?=(?:...)*$)/)
      .join('.')}`;
  } else {
    return 'Rp0';
  }
};
