import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { FiEye, FiHome, FiShare2, FiShoppingBag } from 'react-icons/fi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import BantuanHukum from 'public/static/icons/bantuan_hukum.svg';
import Chat from 'public/static/icons/chat.svg';
import Dekorasi from 'public/static/icons/dekorasi.svg';
import Pinjaman from 'public/static/icons/pinjaman.svg';
import Promotion from 'public/static/icons/promotion.svg';
import Setting from 'public/static/icons/settings.svg';
import Produk from 'public/static/icons/shopping-bag.svg';
import Transaction from 'public/static/icons/transaction.svg';
import Ulasan from 'public/static/icons/ulasan.svg';
import Avatar from 'public/static/Avatar.svg';
import { Image } from '@mantine/core';

const initCollapseMenu = {
  transaksi: true,
  produk: true,
  pinjaman: true,
  penawaran: true,
};

type SideMenuProps = {
  isOpen: boolean;
};

const SideMenu = ({ isOpen }: SideMenuProps) => {
  const router = useRouter();
  const token = nookies.get()?.access_token;

  // collapse menu state
  const storageCollapseMenu = localStorage.getItem('collapseMenu');
  const [collapseMenu, setCollapseMenu] = useState<Record<string, boolean>>(
    storageCollapseMenu ? JSON.parse(storageCollapseMenu) : initCollapseMenu,
  );

  const [settingsRoute, setSettingsRoute] = useState('/settings');
  const [productRoute, setProductRoute] = useState('/product');
  const [addProductRoute, setAddProductRoute] = useState('/add-product');

  const menu = [
    {
      label: 'Chat',
      img: Chat.src,
      route: '/messages',
    },
    {
      label: 'Transaksi',
      img: Transaction.src,
      children: [
        {
          label: 'Pesanan',
          route: '/buyer',
        },
        {
          label: 'E-Sign & E-Meterai',
          route: '/esign-and-emeterai',
        },
        {
          label: 'Pencairan Dana',
          route: '/disbursement',
        },
        {
          label: 'Termin',
          route: '/term',
        },
        {
          label: 'PaDi Kasir',
          route: '/offline-store',
        },
        {
          label: 'Biaya Transaksi Penjual',
          route: '/seller-transaction-fee',
        },
        {
          label: 'Export Data Pesanan',
          route: '/report',
        },
      ],
    },
    {
      label: 'Ulasan',
      route: '/reviews',
      img: Ulasan.src,
    },
    {
      label: 'Produk',
      img: Produk.src,
      children: [
        {
          label: 'Data Produk',
          route: productRoute,
        },
        {
          label: 'Tambah Produk',
          route: addProductRoute,
        },
        {
          label: 'Tambah Produk secara Bulk',
          route: '/add-product-bulk',
        },
        {
          label: 'Export Data Produk',
          route: '/export-product',
        },
      ],
    },
    {
      label: 'Pinjaman',
      img: Pinjaman.src,
      info: {
        title: 'Invoice Financing',
        message:
          'Invoice Financing adalah solusi pembiayaan usaha yang diberikan kepada Seller PaDi UMKM dengan menggunakan invoice aktif atau belum jatuh tempo sebagai jaminan yang bermanfaat dalam memperlancar keuangan bisnis jangka pendek.',
      },
      children: [
        {
          label: 'Tersedia (Syariah/Konvensional)',
          route: '/loan-available',
        },
        {
          label: 'Pinjaman Berlangsung',
          route: '/my-loan',
        },
      ],
    },
    {
      label: 'Alat Marketing',
      img: Promotion.src,
      children: [
        {
          label: 'Pesan Broadcast',
          route: '/pesan-broadcast',
        },
      ],
    },
    {
      label: 'Dekorasi Toko',
      img: Dekorasi.src,
      route: '/shop-decoration',
    },
    {
      label: 'Pengaturan',
      img: Setting.src,
      route: settingsRoute,
    },
    {
      label: 'Bantuan Hukum',
      img: BantuanHukum.src,
      route: '/legals',
    },
    {
      label: 'Pendaftaran NIB',
      route: '/nib-register',
    },
  ].filter(Boolean);

  useEffect(() => {
    // set LocalStorage Collapse Menu
    localStorage.setItem('collapseMenu', JSON.stringify(collapseMenu));
  }, [collapseMenu]);

  return (
    <div
      className={`bg-white lg:h-auto h-full w-[280px] lg:min-w-[280px] border-r border-borderCard-textFieldBorder text-paletteText-primary duration-500 ease-in-out transition-all${
        isOpen
          ? ' md:translate-x-0 -translate-x-[280px] '
          : ' md:-translate-x-[280px] translate-x-0 '
      } md:relative absolute`}>
      <div className="sticky bg-white top-0 flex flex-col py-1 md:py-2 overflow-y-auto overflow-x-hidden ">
        <div className="flex h-full items-center px-4 space-x-2 my-4 md:hidden">
          <div className="rounded-full overflow-hidden w-10 h-10">
            <Image
              src={Avatar.src}
              alt="acc_avatar"
              className="object-cover"
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col text-left text-sm">
            <span>Misko</span>
            <span className="text-xs text-paletteText-inactive">PKP</span>
          </div>
        </div>
        <div className="w-full md:hidden">
          <div className="relative flex items-center">
            <div className="grow border-b border-[#EBEBED]-400"></div>
          </div>
        </div>
        <div
          className="flex space-x-2 p-4 items-center justify-between"
          onClick={() => router.push('/dashboard')}>
          <div className="flex items-center">
            <div className="p-2 bg-[#99D3DE] rounded-full mr-[12px]">
              <FiShoppingBag className="text-[24px] text-[#0092AC]" />
            </div>

            <div className="space-y-1">
              <div className="text-sm font-semibold text-[#444B55]">John</div>
            </div>
          </div>
          <div className="flex items-center space-x-[10px]">
            <FiEye className="text-[18px] cursor-pointer text-[#0092AC]" />
            <FiShare2 className="text-[20px] cursor-pointer text-[#0092AC]" />
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex pb-2 items-center">
            <div className="grow border-b border-[#EBEBED]-400"></div>
          </div>
        </div>
        <div
          className="flex px-4 cursor-pointer hover:text-secondary-70"
          onClick={() => window.location.assign('/buyer')}>
          {window.location.pathname === '/buyer' && (
            <div className="border rounded w-[8px] bg-secondary-70 ml-[-12px] mr-1"></div>
          )}
          <div className="items-center flex space-x-2">
            <FiHome className="text-[24px]" />
            <div className="py-2 text-sm font-semibold">Dashboard</div>
          </div>
        </div>
        {menu &&
          menu?.map((menuList, idx) => {
            return (
              menuList && (
                <div key={idx}>
                  <div className="flex px-4 flex-col">
                    <div className="text-base font-semibold py-2 cursor-pointer hover:text-secondary-70 flex flex-row items-center">
                      {window.location.pathname === menuList.route && (
                        <div className="border h-[38px] rounded w-[8px] bg-secondary-70 ml-[-12px] mr-1"></div>
                      )}
                      <div
                        className={`${
                          menuList.label.toLowerCase() === 'pendaftaran nib' &&
                          'ml-[24px]'
                        } items-center flex justify-between w-full`}>
                        <div className="flex text-sm">
                          {menuList.img && (
                            <Image
                              src={menuList.img}
                              alt={`menu ${menuList.label}`}
                              className="mr-2 w-auto h-auto"
                              width={24}
                              height={24}
                            />
                          )}
                          {menuList.label}{' '}
                        </div>

                        {!menuList.route && (
                          <MdKeyboardArrowUp
                            className={`w-5 h-5
                        ${
                          collapseMenu[menuList.label.toLowerCase()]
                            ? ''
                            : 'rotate-180'
                        } text-[#808C92] text-[24px] transition-all ease-in-out`}
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className={`text-paletteText-primary text-sm whitespace-nowrap
                  ${collapseMenu[menuList.label.toLowerCase()] ? '' : 'hidden'}
                    `}>
                      {menuList.children &&
                        menuList.children.map((child: any, i: number) => {
                          if (!child) {
                            return null;
                          }
                          const childRoute = child.route.split('?')[0];
                          return (
                            <Link
                              href={'/'}
                              passHref
                              key={i}
                              id={child.label.toLowerCase().replace(' ', '_')}
                              data-testid={
                                child.label.toLowerCase() === 'pesanan'
                                  ? 'transaction_submenu_pesanan'
                                  : ''
                              }>
                              <div
                                className={`w-full flex ml-[32px] ${
                                  child.label ===
                                  'Tersedia (Syariah/Konvensional)'
                                    ? 'step1'
                                    : ''
                                } ${child.label === 'Pinjaman Berlangsung' ? 'step4' : ''}`}>
                                <div className="w-full flex" key={i}>
                                  {window.location.pathname === childRoute && (
                                    <div className="border rounded w-[8px] bg-secondary-70 ml-[-12px] mr-1"></div>
                                  )}
                                  <div className="w-full py-2 cursor-pointer hover:text-secondary-70">
                                    {child.label}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )
            );
          })}
        <div className="md:hidden">
          <div className="w-full">
            <div className="relative flex py-2 items-center">
              <div className="grow border-t border-[#EBEBED]-400"></div>
            </div>
          </div>
          <div className="flex flex-col px-12 space-y-3">
            <a className="text-sm text-accent-error-70 hover:text-accent-error-40 font-bold cursor-pointer">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
