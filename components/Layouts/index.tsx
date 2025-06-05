import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  customClass?: string;
}

const Layout = ({ children, customClass }: LayoutProps) => {
  return (
    <div className={`${customClass ?? 'bg-white'}`}>
      <Head>
        <title>PaDi UMKM</title>
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
