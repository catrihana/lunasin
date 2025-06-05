import { refreshToken } from 'Config/cookie';
import { getRefreshToken } from 'Services/auth';
import {
  MutationFunction,
  UseMutateFunction,
  UseMutationOptions,
  useMutation,
} from 'react-query';
import nookies from 'nookies';
import { useEffect } from 'react';

const useProviderMutation = (
  queryFn: MutationFunction<unknown, void>,
  options: UseMutationOptions = {},
) => {
  const refreshTokenAndRefetch = async (
    mutateFunction: UseMutateFunction<unknown, any, void, unknown>,
    payload: any,
  ) => {
    try {
      const { data } = await getRefreshToken({
        refresh: refreshToken(),
      });

      const { data: result } = data;

      nookies.set(null, 'access_token', result?.accessToken, {
        path: '/',
        sameSite: 'none',
        secure: true,
      });

      nookies.set(null, 'refresh_token', result?.refreshToken);

      mutateFunction(payload);
    } catch (err) {
      console.error(err);
    }
  };

  const mutation: any = useMutation(queryFn, options);

  useEffect(() => {
    if (mutation.isError && mutation.error?.response?.status === 401) {
      refreshTokenAndRefetch(mutation.mutate, mutation.variables);
    }
  }, [mutation.isError, mutation.error]);

  return mutation;
};

export default useProviderMutation;
