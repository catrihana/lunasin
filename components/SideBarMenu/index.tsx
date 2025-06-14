import { DASHBOARD_MENU } from 'Constants/constant-menu';
import SideBarMenuItem from './SideBarMenuItem';

const SideBarMenu = () => {
  return (
    <div className="rounded-xl lg:rounded-none xl:rounded-none shadow-[0_1px_5px_0px_rgba(0,0,0,0.12)] top-[16px] bg-white border-b m-8 lg:m-0 xl:m-0 pb-8 md:pb-8 lg:pb-0 xl:pb-0 lg:flex md:shrink-0 lg:sticky xl:sticky  max-h-[650px] lg:w-64 xl:w-64 transition duration-500 ease-in-out translate-x-0 no-scrollbar overflow-y-auto">
      <div className="grow overflow-y-auto no-scrollbar max-h-[600px]">
        {DASHBOARD_MENU.map((el: any, key: number) => {
          return <SideBarMenuItem data={el} key={key} />;
        })}
      </div>
    </div>
  );
};

export default SideBarMenu;
