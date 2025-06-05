export type SigninForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  name: string;
  email: string;
  phone_number: string;
  referal: string | null;
  isReferalBuyer: boolean;
  captchaToken: string;
};

export type ValidateToken = {
  [key: string]: string | string[] | undefined;
};
