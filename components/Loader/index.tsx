import React from 'react';

type LoaderProps = {
  className?: string;
  whFull?: boolean;
};

const Loader = ({ className, whFull = true }: LoaderProps) => {
  return (
    <div
      data-testid="loader"
      className={`animate-pulse bg-slate-200 ${
        whFull && 'w-full h-full'
      } rounded-lg ${className ?? ''}`}
    />
  );
};

export default Loader;
