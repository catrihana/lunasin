import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { refreshToken } from 'Config/cookie';

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/buyer', '/', {
      shallow: true,
    });
  }, [router]);

  return null;
};

export default HomePage;
