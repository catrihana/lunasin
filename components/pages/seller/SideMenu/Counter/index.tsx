import React from 'react';

type CounterProps = {
  counter: number;
  withMax?: boolean;
};

export default function Counter({ counter, withMax = true }: CounterProps) {
  return (
    <div className="w-fit flex items-center mr-9">
      <div className="bg-[#CA0D00] text-white text-xs font-semibold rounded-[99px] px-1 ml-2 h-fit">
        {withMax ? (counter > 99 ? '99+' : counter) : counter}
      </div>
    </div>
  );
}
