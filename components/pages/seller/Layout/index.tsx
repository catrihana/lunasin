import { useState } from 'react';
import dynamic from 'next/dynamic';
import LoadingSideMenu from './LoadingSideMenu';
import Footer from '../Footer';

const SideMenu = dynamic(() => import('../SideMenu'), {
  ssr: false,
  loading: () => <LoadingSideMenu />,
});

export default function Layout({
  sideMenu = true,
  children,
  contentStyle = '',
  withInfo = true,
}: any) {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <div className="flex-row justify-center items-between lg:h-screen bg-white text-paletteText-primary overflow-auto">
        <div className="flex relative w-full">
          {sideMenu && <SideMenu isOpen={isOpen} />}
          <div
            className={
              contentStyle
                ? contentStyle
                : 'sm:w-full lg:px-[30px] lg:py-[24px] px-4 py-4'
            }>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
