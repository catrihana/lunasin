import nookies from 'nookies';

export const findToken = () => {
  const token = nookies.get().access_token;
  return token;
};

export const refreshToken = () => {
  const tokenRefresh = nookies.get().refresh_token;
  return tokenRefresh;
};

export const setToken = (accessToken: string, refreshToken: string) => {
  nookies.set(null, 'access_token', accessToken, {
    path: '/',
    sameSite: 'none',
    secure: true,
  });
  nookies.set(null, 'refresh_token', refreshToken);
};

export const removeToken = () => {
  nookies.destroy(null, 'access_token', { path: '/' });
  nookies.destroy(null, 'refresh_token', { path: '/' });
};
