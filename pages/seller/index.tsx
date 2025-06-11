import { useEffect, useState } from 'react';
import { Tooltip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaChevronRight, FaStar } from 'react-icons/fa';
import { IoMdInformationCircle } from 'react-icons/io';
import Shop from 'public/static/icons/shop.svg';
import { bannerDashboard, infoPenting } from 'Constants/seller';
import SimpleImageSlider from 'components/pages/seller/SimpleImageSlider';
import Layout from 'components/pages/seller/Layout';
import ProcessTransaction from 'components/pages/seller/process-transaction';
import UploadModal from 'components/pages/buyer/Modal/UploadModal';
import SuccessModal from 'components/pages/buyer/Modal/SuccessModal';
import LoadingModal from 'components/LoadingModal';

const activeCarousel = 0;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<{ show: boolean; val: string }>({
    show: false,
    val: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bannerLeft, setBannerLeft] = useState<any[]>([]);

  useEffect(() => {
    setBannerLeft(
      bannerLeft?.map((item_a: any, key_a: any) => {
        item_a.active = false;
        if (key_a === activeCarousel) {
          item_a.active = true;
        }
        return item_a;
      }),
    );
  }, [bannerLeft]);

  useEffect(() => {
    const left = bannerDashboard?.banners?.left_banner?.map(
      (value: any, index: number) => ({
        active: index === 0,
        image: `https://${value?.banner_desktop}`,
        link: value?.link,
      }),
    );
    setBannerLeft(left);
  }, []);

  return (
    <div className="relative">
      <Layout>
        <div className="flex flex-col gap-y-4 w-full">
          <span className="font-bold leading-9 text-[24px] text-paletteText-primary">
            Dashboard
          </span>
          <div className="flex flex-col gap-6 w-full xl:flex-row">
            <div className="flex flex-col gap-y-4 w-full xl:max-w-[900px]">
              {bannerDashboard?.banners?.left_banner?.length > 0 && (
                <SimpleImageSlider
                  images={bannerDashboard?.banners?.left_banner?.map(
                    (item: any, i: number) => ({
                      src: `https://${item?.banner_desktop}?x-oss-process=image/resize,m_fill,w_1058,h_345`,
                      alt: `bannerDashboard-${i + 1}`,
                      link: item?.link,
                    }),
                  )}
                />
              )}
              <div className="bg-[#F3FCFE] flex items-center justify-between p-4 rounded-lg shadow-elevation-2">
                <div className="flex gap-x-3 items-center">
                  <Image alt="" height={32} src={Shop.src} width={32} />
                  <div className="flex flex-col">
                    <span className="font-bold leading-5 text-[14px] text-paletteText-primary">
                      John
                    </span>
                    <p className="leading-[18px] text-[12px]">
                      <span className="font-normal text-paletteText-primary">
                        Rating Toko
                      </span>{' '}
                      -{' '}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 items-center">
                  <div className="flex flex-col items-center">
                    <span className="font-medium leading-[18px] text-[12px] text-paletteText-secondary">
                      Skor Rating
                    </span>
                    <div className="flex gap-x-1 items-center">
                      <span className="font-bold leading-[26px] text-[#25974C] text-[18px]">
                        4
                      </span>
                      <Tooltip
                        color="#FFFFFF"
                        label={
                          <div className="flex flex-col gap-y-2 px-2 py-4 rounded-lg w-[300px]">
                            <div className="flex items-center justify-between">
                              <span className="font-medium leading-5 text-paletteText-primary text-[14px]">
                                Data Rekap
                              </span>
                              <span className="font-medium leading-[18px] text-paletteText-primary text-[12px]">
                                Nilai
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-normal leading-5 text-[14px] text-paletteText-secondary">
                                Transaksi Berhasil
                              </span>
                              <span className="font-medium leading-[18px] text-[#25974C] text-[12px]">
                                3%
                              </span>
                            </div>
                            <hr className="border-[0.5px] border-[#DEE3ED] border-solid" />
                            <div className="flex items-center justify-between">
                              <span className="font-normal leading-5 text-[14px] text-paletteText-secondary">
                                Tingkat Pinjaman Disetujui
                              </span>
                              <span className="font-medium leading-[18px] text-[#25974C] text-[12px]">
                                4%
                              </span>
                            </div>
                            <hr className="border-[0.5px] border-[#DEE3ED] border-solid" />
                            <div className="flex items-center justify-between">
                              <span className="font-normal leading-5 text-[14px] text-paletteText-secondary">
                                Kecepatan Pengiriman Barang
                              </span>
                              <span className="font-medium leading-[18px] text-[#25974C] text-[12px]">
                                5%
                              </span>
                            </div>
                            <hr className="border-[0.5px] border-[#DEE3ED] border-solid" />
                            <div className="flex items-center justify-between">
                              <span className="font-normal leading-5 text-[14px] text-paletteText-secondary">
                                Kelengkapan Dokumen
                              </span>
                              <span className="font-medium leading-[18px] text-[#25974C] text-[12px]">
                                9%
                              </span>
                            </div>
                          </div>
                        }
                        multiline
                        position="top"
                        radius="sm">
                        <span>
                          <AiOutlineInfoCircle color="#444B55" size={16} />
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                  <button className="flex gap-x-1 hover:opacity-50 items-center">
                    <span className="font-medium leading-[18px] text-[#009EA9] text-[12px]">
                      Detail Rating Toko
                    </span>
                    <FaChevronRight color="#009EA9" size={12} />
                  </button>
                </div>
                <div className="flex flex-col gap-y-1 items-center">
                  <div className="flex flex-col items-center">
                    <span className="font-medium leading-[18px] text-[12px] text-paletteText-secondary">
                      Rating Produk & Ulasan
                    </span>
                    <div className="flex gap-x-1 items-center">
                      <FaStar color="#F7931E" size={14} />
                      <span className="font-medium leading-5 text-[14px] text-paletteText-primary">
                        5
                      </span>
                    </div>
                  </div>
                  <button className="flex gap-x-1 hover:opacity-50 items-center">
                    <span className="font-medium leading-[18px] text-[#009EA9] text-[12px]">
                      Detail Rating Produk
                    </span>
                    <FaChevronRight color="#009EA9" size={12} />
                  </button>
                </div>
              </div>
              <ProcessTransaction isOpen={setIsOpen} />
            </div>
            <div className="flex flex-col gap-y-4 w-full xl:max-w-[356px]">
              {bannerDashboard?.right_banner_is_active &&
                bannerDashboard?.banners?.right_banner?.length > 0 && (
                  <div className="h-[230px] min-h-max relative w-full">
                    <Link
                      href={
                        bannerDashboard?.banners?.right_banner?.[0]?.link ?? ''
                      }
                      passHref
                      rel="noreferrer noopener"
                      target="_blank">
                      <Image
                        alt="Dashboard Banner Desktop"
                        blurDataURL="#000000"
                        className="rounded-lg"
                        layout="fill"
                        placeholder="blur"
                        src={`https://${bannerDashboard?.banners?.right_banner?.[0]?.banner_desktop}`}
                      />
                    </Link>
                  </div>
                )}
              <div className="bg-white flex flex-col gap-y-4 py-4 rounded-lg shadow-elevation-3">
                <span className="font-bold leading-6 px-4 text-[#333346] text-[16px]">
                  Info Penting
                </span>
                <div className="flex flex-col gap-y-4 h-[252px] overflow-y-auto px-4 w-full">
                  {infoPenting?.map((item: any, index: number) => (
                    <div
                      className="bg-[#FEF2E6] flex gap-x-2 p-4 rounded-lg"
                      key={index}>
                      <div className="h-5 w-5">
                        <IoMdInformationCircle color="#B1B4B8" size={20} />
                      </div>
                      <p className="font-normal leading-5 text-[14px] text-paletteText-primary">
                        {item?.desc}{' '}
                        <a
                          rel="noreferrer noopener"
                          target="_blank"
                          href={item?.url}>
                          <span className="cursor-pointer font-medium text-[#0092AC]">
                            {item?.url}
                          </span>
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
                <Link href="" rel="noopener noreferrer" target="_blank">
                  <span className="font-semibold leading-5 px-4 text-[#0092AC] text-[14px]">
                    Lihat Selengkapnya
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <UploadModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsLoading={setIsLoading}
          setIsSuccess={setIsSuccess}
        />
        <SuccessModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
        <LoadingModal isOpen={isLoading} />
      </Layout>
    </div>
  );
};

export default Dashboard;
