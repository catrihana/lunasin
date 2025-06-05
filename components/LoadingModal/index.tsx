import React from 'react';
import LazyLoadingSpinner from './LazyLoadingSpinner';

export default function LoadingModal({ isOpen }: any) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl p-5 lg:min-w-[554px]">
        <div className="w-full flex font-bold text-xl items-center justify-center space-x-2 text-secondary-70">
          <LazyLoadingSpinner />
          <span className="hidden">Loading...</span>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
