import Link from 'next/link';
import { useRouter } from 'next/router';
import { isActivePath } from 'src/utils/side-menu';

const SideBarMenuItem = ({ data }: any) => {
  const router = useRouter();
  const menus = data.menu;

  return (
    <div className="flex flex-col pt-3 last:pb-3">
      <div className="flex items-center justify-between ">
        <div className="flex p-1 items-center">
          {data.icon}
          <span className={'font-bold text-sm ml-2'}>{data?.name ?? ''}</span>
        </div>
      </div>
      {menus.length > 0 && (
        <div className="text-paletteText-primary space-y-2 text-xs whitespace-normal  ">
          {menus.map((el: any, key: number) => {
            return (
              <Link className={el.className} href={el.path} passHref key={key}>
                <div className="flex justify-between items-center cursor-pointer">
                  <div className="flex gap-2">
                    <span
                      className={`w-1 ${
                        isActivePath(el.path, router) &&
                        ' bg-secondary-60 rounded-r-lg'
                      }`}
                    />
                    <div className="flex p-1 items-center">
                      {el.icon}
                      <span
                        className={`${
                          isActivePath(el.path, router) &&
                          'text-secondary-70 font-bold'
                        } text-xs  ml-2`}>
                        {el?.label ?? ''}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBarMenuItem;
