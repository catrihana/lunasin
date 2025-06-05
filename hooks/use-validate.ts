'use client';
import { refreshToken } from 'Config/cookie';
import { signOut, validateToken } from 'Services/auth';
import { ValidateToken } from 'Types/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import nookies from 'nookies';
import useProviderQuery from './use-provider-query';

export type MetaResponse = {
  code: number;
  success: boolean;
  message: string;
};

const useValidate = () => {
  const router = useRouter();

  const { token = '', email = '', name = '' }: ValidateToken = router.query;

  const [meta, setMeta] = useState<MetaResponse>({
    code: 0,
    success: true,
    message: '',
  });
  const [reqBody, setReqBody] = useState<ValidateToken>({
    email: '',
    name: '',
  });
  const mutation = useMutation(validateToken);

  const querySignout = useProviderQuery('logout', signOut, {
    retry: false,
    enabled: !!refreshToken(),
    onSuccess: () => {
      nookies.destroy(null, 'refresh_token');
      nookies.destroy(null, 'access_token');

      localStorage.removeItem('userProfile');

      mutation.mutate(reqBody);
    },
  });

  useEffect(() => {
    setReqBody({
      token,
      email,
    });
  }, [token, email]);

  useEffect(() => {
    if (mutation.isSuccess) {
      const { data = {} }: any = mutation?.data;
      const { meta = {} } = data;

      setMeta({ ...meta });
    }

    if (mutation.isError) {
      const { response = {} }: any = mutation?.error;
      const { meta = {} }: any = response?.data;

      setMeta({ ...meta });
    }
  }, [mutation.isSuccess, mutation.isError, mutation?.data, mutation?.error]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isNotHaveRefreshToken = !refreshToken() && querySignout?.isIdle;
      const mutate = mutation.mutate;

      if (isNotHaveRefreshToken) {
        mutate(reqBody);
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [reqBody, querySignout?.isIdle, mutation.mutate]);

  return {
    email,
    token,
    name,
    ...meta,
  };
};

export default useValidate;
