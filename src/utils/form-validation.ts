const regex = {
  symbol: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
  number: /[0-9]/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const isEmpty = (value: string) =>
  value === undefined || value.trim().length == 0;

export const validateRequired = (val: string) => {
  return !isEmpty(val) || 'Belum diisi';
};

export const validateMoreThan = (val: string, maxLength: number) => {
  return val.length >= maxLength;
};

export const validateMustHaveSymbol = (val: string) => {
  return regex.symbol.test(val);
};

export const validateMustHaveNumber = (val: string) => {
  return regex.number.test(val);
};

export const validatePasswordConfirmed = (
  password: string,
  confirmPass: string,
) => {
  return password === confirmPass || 'Ulangi password tidak sama';
};

export const validateEmail = (v: string) => {
  return isEmpty(v) || regex.email.test(v) || 'Format email salah';
};
