export const convertToLocalCurrency = (
  amountCount: string | number | unknown,
  countDesimal: number = 2,
  thousands: string = '.',
): string => {
  try {
    countDesimal = Math.abs(countDesimal);
    countDesimal = isNaN(countDesimal) ? 2 : countDesimal;

    const numAmountCount: number = Math.abs(Number(amountCount)) || 0;
    const signNegative: string = numAmountCount < 0 ? '-' : '';
    const amountString: string = numAmountCount.toFixed(countDesimal);
    const i: string = parseInt(amountString).toString();
    const j: number = i.length > 3 ? i.length % 3 : 0;

    return (
      signNegative +
      (j ? i.substring(0, j) + thousands : '') +
      i.substring(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands)
    );
  } catch (e) {
    return '0,00';
  }
};
