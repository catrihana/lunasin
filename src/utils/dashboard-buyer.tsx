import { useEffect } from 'react';

export function priceFormat(value: any) {
  if (!value) {
    return 'Rp0';
  }

  return `Rp${value?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, '.') ?? '0'}`;
}

export const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
