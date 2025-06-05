import { HTTPClientAuth, HTTPClientNonAuth } from 'Config/http';
import { RegisterForm, SigninForm, ValidateToken } from 'Types/auth';

const prefix = 'user';

export const signIn = (form: SigninForm) => {
  return HTTPClientNonAuth().post(`${prefix}/login`, form);
};

export const validateToken = (payload: ValidateToken) => {
  return HTTPClientNonAuth().post(`${prefix}/validate-token`, payload);
};

export const resetPassword = (payload: ValidateToken) => {
  return HTTPClientNonAuth().post(`${prefix}/activate`, payload);
};

export const getRefreshToken = (payload: any) => {
  return HTTPClientAuth().post(`${prefix}/refresh`, payload);
};

export const signOut = () => {
  return HTTPClientAuth().get(`${prefix}/logout`);
};
