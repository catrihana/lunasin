import axios from 'axios';
import { findToken, refreshToken, setToken } from './cookie';
import Service from './service';

const isTokenExpiringSoon = (
  token: string,
  bufferTimeInSeconds: number = 60,
) => {
  if (!token) return true;
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const currentTime = Math.floor(Date.now() / 1000);

  return decodedToken?.exp - currentTime < bufferTimeInSeconds;
};

const refreshAccessToken = async () => {
  try {
    const response = await axios.post(`${Service.API}/user/refresh`, {
      refresh: refreshToken(),
    });

    const { data: resultData } = response?.data;
    setToken(resultData?.accessToken, resultData?.refreshToken);

    return resultData?.accessToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

export const HTTPClientAuth = () => {
  const client = axios.create({
    baseURL: `${Service.API}/api`,
    headers: {
      Accept: 'application/json',
      Prefix: 'solution',
      Platform: 'web',
    },
    timeout: 120000,
  });

  client.interceptors.request.use(
    async (config) => {
      const token = findToken();

      if (isTokenExpiringSoon(token, 60)) {
        try {
          const newToken = await refreshAccessToken();
          config.headers['Authorization'] = `Bearer ${newToken}`;
        } catch (error) {
          return Promise.reject(error);
        }
      } else {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return client;
};

export const HTTPClientNonAuth = (contentType?: string) => {
  const client = axios.create({
    baseURL: `${Service.API}/api`,
    headers: {
      Accept: contentType || 'application/json',
    },
    timeout: 120000,
  });

  return client;
};
