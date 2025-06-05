'use client';
import { refreshToken } from 'Config/cookie';
import { getRefreshToken } from 'Services/auth';
import {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  useMutation,
  useQuery,
} from 'react-query';
import nookies from 'nookies';
import { useEffect } from 'react';

const refreshTokenAndRefetch = async () => {
  try {
    const { data } = await getRefreshToken({ refresh: refreshToken() });
    const { data: resultData } = data;
    nookies.set(null, 'access_token', resultData?.accessToken, {
      path: '/',
      sameSite: 'none',
      secure: true,
    });
    nookies.set(null, 'refresh_token', resultData?.refreshToken);
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
};

const useProviderQuery = (
  queryKey: QueryKey,
  queryFn: QueryFunction<unknown, QueryKey>,
  options: Omit<
    UseQueryOptions<unknown, QueryKey>,
    'queryKey' | 'queryFn'
  > = {},
) => {
  const finalOptions = {
    ...options,
    refetchOnMount: true,
  };

  const queryProvider: any = useQuery(queryKey, queryFn, finalOptions);

  const mutation = useMutation(refreshTokenAndRefetch, {
    onSuccess: () => {
      queryProvider.refetch();
    },
    onError: (error) => {
      console.error('Error refreshing token:', error);
    },
  });

  useEffect(() => {
    if (
      queryProvider.isError &&
      queryProvider.error?.response?.status === 401
    ) {
      mutation.mutate();
    }
  }, [queryProvider.isError, queryProvider.error]);

  return queryProvider;
};

export default useProviderQuery;
