import moment from 'moment';
import { BiUpArrowAlt } from 'react-icons/bi';
import { IoInformationCircleOutline } from 'react-icons/io5';
import CardDashboard from '../../CardDashboard';
import Good from 'public/static/good.svg';
import { Image } from '@mantine/core';

const PerformaDashboard = ({ data }: any) => {
  const handleTopValue = (item: any) => {
    return item?.average >= item?.term?.replaceAll('TOP', '')
      ? 'text-[#EE3124]'
      : item?.average < item?.term?.replaceAll('TOP', '')
        ? 'text-[#25974C]'
        : '';
  };

  return (
    <CardDashboard type={false} customClass="w-full bg-white !p-0">
      <div className="w-full py-4 px-4">
        <div className="md:flex md:justify-between items-center md:space-x-1">
          <div className="text-[18px] font-bold text-[#212121]">
            Performa Pembayaran
          </div>
          {data?.created_at && (
            <div className="text-xs text-[#98A2B3] md:text-end">
              Diperbaharui{' '}
              {moment(data?.created_at ?? '')
                .subtract(7, 'hours')
                .format('ll')}
            </div>
          )}
        </div>
        <div className="text-[14px] text-[#86909C]">
          Rincian penilaian ketepatan pembayaran perusahaan Anda setahun
          terakhir.
        </div>
      </div>
      <hr />
      <div className="py-[54px] px-4 sm:flex">
        <div className="space-y-4 items-center flex flex-col max-w-[200px] max-h-[199px] mr-4 sm:justify-normal justify-self-center">
          <Image src={data?.image || Good.src} alt="performa" />
        </div>
        <div>
          <div>
            <div className="font-bold text-[#101828] items-center flex space-x-1">
              <p>Rata-rata Durasi Pembayaran</p>
              <div className="group relative inline-block">
                <IoInformationCircleOutline className="mr-1 text-[16px] text-[#444B55]" />
                <div className="pointer-events-none absolute w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Rata-rata durasi pembayaran seluruh transaksi.
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1 mb-2">
              <p className="font-bold text-[24px] text-[#444B55]">
                {data?.payment_average ?? 0}
              </p>
              <p className="text-[#98A2B3] text-[12px]">Hari</p>
            </div>
            <div className="flex items-center space-x-1 mb-8">
              <div
                className={`flex items-center space-x-1 ${data?.last_year_percentage > 0 ? 'bg-[#FCD1CE]' : 'bg-[#D1FADF]'} px-1 rounded-full`}>
                <BiUpArrowAlt
                  className={`text-[16px] font-bold ${data?.last_year_percentage > 0 ? 'text-[#EE3124] rotate-180' : 'text-[#12B76A]'}`}
                />
                <div
                  className={`text-[14px] font-semibold ${data?.last_year_percentage > 0 ? 'text-[#EE3124]' : 'text-[#12B76A]'}`}>
                  {data?.last_year_percentage ?? 0}%
                </div>
              </div>
              <div className="text-[#5F6D7E] text-[14px]">per tahun</div>
            </div>
          </div>
          <div className="flex">
            {data?.terms?.map((item: any, idx: number) => (
              <div
                key={idx}
                className={`${idx !== data?.terms?.length - 1 && 'border-r border-solid mr-4'}`}>
                <div className="mr-4 font-bold text-[#101828] items-center flex space-x-1">
                  <p>{item?.term ?? 0}</p>
                  <div className="group relative inline-block">
                    <IoInformationCircleOutline className="mr-1 text-[16px] text-[#444B55]" />
                    <div className="pointer-events-none absolute w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Rata-rata durasi pembayaran dengan tempo waktu{' '}
                      {item?.term?.replaceAll('TOP', '') ?? 0} hari.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <p
                    className={`font-bold text-[24px] ${handleTopValue(item) ?? 'text-[#212121]'}`}>
                    {item?.average ?? 0}
                  </p>
                  <p className="text-[#98A2B3] text-[12px]">Hari</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardDashboard>
  );
};

export default PerformaDashboard;
