import React from 'react';
import Avatar from 'public/static/Avatar.svg';
import Loader from 'components/Loader';
import { Image } from '@mantine/core';

export default function LoadingSideMenu() {
  return (
    <div
      className={
        'bg-white lg:h-auto h-full min-w-[280px] border-r border-borderCard-textFieldBorder text-paletteText-primary duration-500 ease-in-out transition-all md:translate-x-0 -translate-x-[280px] md:relative absolute'
      }>
      <div className="sticky bg-white top-0 flex flex-col py-1 md:py-2 overflow-y-auto overflow-x-hidden">
        <div className="flex h-full items-center px-4 space-x-2 my-4 md:hidden">
          <div className="rounded-full overflow-hidden w-10 h-10">
            <Image
              src={Avatar.src}
              alt=""
              width={40}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col text-left text-sm">
            <Loader className="w-16 h-4 mb-1" />
            <Loader className="w-16 h-4" />
          </div>
        </div>
        <div className="w-full md:hidden">
          <div className="relative flex items-center">
            <div className="grow border-b border-[#EBEBED]-400"></div>
          </div>
        </div>
        <div className="flex space-x-2 px-4 pt-4 items-center justify-between">
          <div className="flex items-center">
            <div className="rounded-full mr-[12px]">
              <div className="w-8 h-8 animate-pulse bg-slate-200 rounded-full" />
            </div>
            <div className="space-y-1">
              <div className="text-sm font-semibold text-[#444B55]">
                <div className="w-28 h-5 animate-pulse bg-slate-200 rounded" />
              </div>
              <div className="w-20 h-4 animate-pulse bg-slate-200 rounded" />
            </div>
          </div>
          <div className="flex items-center space-x-[10px]">
            <div className="w-6 h-6 animate-pulse bg-slate-200 rounded" />
            <div className="w-6 h-6 animate-pulse bg-slate-200 rounded" />
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex pb-2 pt-4 items-center">
            <div className="grow border-b border-[#EBEBED]-400"></div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 px-4 cursor-pointer hover:text-secondary-70">
          <div className="items-center flex space-x-3">
            <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="w-32 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="items-center flex space-x-3">
            <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="w-24 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="space-y-2">
            <div className="items-center flex justify-between">
              <div className="items-center flex space-x-3">
                <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
                <div className="w-28 h-5 animate-pulse bg-slate-200 rounded" />
              </div>
              <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            </div>
            <div className="ml-8 w-20 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="ml-8 w-16 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="ml-8 w-20 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="ml-8 w-36 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="ml-8 w-32 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="items-center flex space-x-3">
            <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="w-32 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="space-y-2">
            <div className="items-center flex justify-between">
              <div className="items-center flex space-x-3">
                <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
                <div className="w-28 h-5 animate-pulse bg-slate-200 rounded" />
              </div>
              <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            </div>
            <div className="ml-8 w-28 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="ml-8 w-32 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="ml-8 w-36 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="space-y-2">
            <div className="items-center flex justify-between">
              <div className="items-center flex space-x-3">
                <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
                <div className="w-24 h-5 animate-pulse bg-slate-200 rounded" />
              </div>
              <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            </div>
          </div>

          <div className="items-center flex space-x-3">
            <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="w-32 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="items-center flex space-x-3">
            <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="w-36 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="items-center flex space-x-3">
            <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="w-32 h-5 animate-pulse bg-slate-200 rounded" />
          </div>

          <div className="items-center flex space-x-3">
            <div className="w-5 h-5 animate-pulse bg-slate-200 rounded" />
            <div className="w-36 h-5 animate-pulse bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
