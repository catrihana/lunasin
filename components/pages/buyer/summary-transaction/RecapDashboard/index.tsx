import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { priceFormat } from 'src/utils/dashboard-buyer';
import CardDashboard from '../../CardDashboard';

const RecapDashboard = ({ valRecap }: any) => {
  return (
    <div className="space-y-4">
      {valRecap?.map((item: any, idx: number) => (
        <CardDashboard key={idx} type={false} customClass="w-full bg-white">
          <div>
            <div
              className={`font-bold ${item?.name.includes('Jatuh Tempo') && 'text-[#EE3124]'} text-[#686E76] items-center flex space-x-1`}>
              <p>{item?.name}</p>
              <IoInformationCircleOutline
                className={`mr-1 text-[16px] ${item?.name.includes('Jatuh Tempo') && 'text-[#EE3124]'}`}
              />
            </div>
            <div className="flex items-center space-x-1 mb-2">
              <p className="font-bold text-[24px] text-[#444B55]">
                {priceFormat(item?.total)}
              </p>
            </div>
            <div className="flex justify-between xl:w-[313px] w-full">
              <div className="text-[14px] flex space-x-1">
                <p className="font-bold text-[#444B55]">{item?.count}</p>
                <p className="text-[#686E76]">Transaksi</p>
              </div>
              <div className="cursor-pointer flex text-[#009EA9] space-x-1 items-center">
                <p>Lihat Semua</p>
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </div>
        </CardDashboard>
      ))}
    </div>
  );
};
export default RecapDashboard;
