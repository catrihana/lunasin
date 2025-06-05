import { useEffect } from 'react';

const Dropdown = (props: any) => {
  const {
    children,
    isOpen,
    additionalClassName,
    position,
    width,
    isSelect2 = false,
    customBody,
  } = props;

  useEffect(() => {
    if (!isSelect2) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen, isSelect2]);

  return (
    <div
      style={{ zIndex: 1 }}
      className={`overflow-hidden font-ubuntu ${!isOpen ? 'hidden' : ''} ${
        position ? position : 'right-0'
      } origin-top-right absolute mt-2${
        width ? width : ''
      } rounded-lg shadow-lg bg-white focus:outline-none cursor-default z-50 ${
        additionalClassName ?? ''
      }`}>
      <div className={customBody ?? 'py-1'} role="none">
        {children}
      </div>
    </div>
  );
};

const DropdownMenu = (props: any) => {
  return (
    <div
      {...props}
      className={`text-gray-700 font-ubuntu block px-4 py-2 text-sm ${
        props.className ?? ''
      }`}
      role="menuitem">
      {props.children}
    </div>
  );
};

const DropdownDivider = ({ additionalClassName }: any) => {
  return (
    <div
      className={`flex flex-col w-full divide-y-4 divide-borderCard-card ${
        additionalClassName ?? ''
      }`}>
      <div />
      <div />
    </div>
  );
};

export { Dropdown, DropdownMenu, DropdownDivider };
