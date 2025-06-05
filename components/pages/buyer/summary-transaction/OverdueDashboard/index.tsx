import { BsCircleFill } from 'react-icons/bs';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { RiQuestionFill } from 'react-icons/ri';
import CardDashboard from '../../CardDashboard';
import DoughnutChart from '../../DoughnutChart';

const OverdueDashboard = ({ data }: any) => {
  return (
    <CardDashboard type={false} customClass="w-full bg-white">
      <div className="text-[14px] text-[#86909C] flex items-center space-x-2">
        <p>Keterlambatan Pembayaran (Overdue)</p>
        <div className="group relative inline-block">
          <RiQuestionFill className="text-[16px]" />
          <div className="pointer-events-none absolute w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Data berikut menginformasikan status proporsi keterlambatan
            pembayaran dari setiap tagihan yang sudah diterbitkan oleh penjual.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:justify-between">
        <div className="items-center w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[10px]">
              <BsCircleFill className="text-[8px] text-[#2970FF]" />
              <p className="text-[14px]">Invoice</p>
            </div>
            <p className="text-[#212121] font-bold">
              {data?.issued_total ?? 0}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-[10px]">
              <BsCircleFill className="text-[8px] text-[#F04438]" />
              <p className="text-[14px]">Overdue</p>
            </div>
            <p className="text-[#212121] font-bold">
              {data?.overdue_total ?? 0}
            </p>
          </div>
        </div>
        <div className="w-full flex order-first lg:order-none justify-center items-center">
          <DoughnutChart
            data={[data?.overdue_total ?? 0, data?.issued_total ?? 1]}
            type="doughnut"
            bgColor={['#F04438', '#2970FF']}
            customClass="!w-[115px] !h-[115px]"
            borderWidth={2}
            text={`${data?.overdue_percentage ?? 0}%`}
            size="200"
            weight="bold"
            color="#EE3124"
          />
        </div>
        <div className="w-full items-center lg:flex lg:justify-center">
          <div className="flex">
            {data?.terms?.map((item: any, idx: number) => (
              <div
                key={idx}
                className={`${idx !== data?.terms?.length - 1 && 'border-r border-solid mr-4'}`}>
                <div
                  className={`${idx !== data?.terms?.length - 1 && 'mr-4'} font-bold text-[#101828] items-center flex space-x-1`}>
                  <p>{item?.term ?? '-'}</p>
                  <div className="group relative inline-block">
                    <IoInformationCircleOutline className="mr-1 text-[16px] text-[#444B55]" />
                    <div className="pointer-events-none absolute -mx-2 w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Presentase keterlambatan dari transaksi dengan durasi
                      tempo {item?.term?.replaceAll('TOP', '') ?? 0} hari.
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="font-bold text-[24px] text-[#101828]">
                    {item?.overdue_percentage ?? 0}
                  </p>
                  <p className="text-[#98A2B3] text-[12px]">%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardDashboard>
  );
};
export default OverdueDashboard;
