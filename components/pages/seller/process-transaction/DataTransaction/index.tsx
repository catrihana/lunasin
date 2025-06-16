import moment from 'moment';
import Link from 'next/link';
import { priceFormat } from 'src/utils/dashboard-buyer';

const DataTransaction = ({ data, isOpen }: any) => {
  if (data?.orders?.length <= 0 || !data?.orders) {
    return (
      <tr className="border-b">
        <td
          colSpan={6}
          className="text-sm text-gray-900 font-normal p-4 whitespace-nowrap text-center">
          Belum ada transaksi.
        </td>
      </tr>
    );
  }

  return data?.orders?.map((val: any, key: number) => (
    <tr
      className={`border-b ${key % 2 === 0 ? 'bg-[#FBFAFF]' : 'bg-white'}`}
      key={key}>
      <td className="text-sm text-[#009EA9] underline font-normal p-4 whitespace-nowrap w-1/4">
        #{val?.invoice_number ?? '-'}
      </td>
      <td className="text-sm text-gray-900 font-normal p-4 whitespace-nowrap w-1/4">
        {priceFormat(val?.price_total) ?? '-'}
      </td>
      <td className="text-sm text-gray-900 font-normal p-4 whitespace-nowrap w-1/4 capitalize">
        {val?.by ?? '-'}
      </td>
      <td className="text-sm text-gray-900 font-normal p-4 whitespace-nowrap w-1/4">
        {val?.status ?? '-'}
      </td>
      <td className="space-x-1 flex text-sm text-[#009EA9] font-medium p-4 whitespace-nowrap w-1/4">
        {val?.status_id === 3 ? (
          <>
            <Link href={'/ip'} rel="noreferrer noopener" target="_blank">
              <span>Invoice</span>
            </Link>
            <p>|</p>
            <Link href={'/ip'} rel="noreferrer noopener" target="_blank">
              <span>Faktur</span>
            </Link>
          </>
        ) : null}
      </td>
      <td className="text-sm font-normal p-4 whitespace-nowrap w-1/4">
        {val?.status_id === 2 ? (
          <div className="text-[#B3B3B3] cursor-not-allowed">Menunggu...</div>
        ) : val?.status_id === 3 ? (
          <div
            onClick={() => isOpen({ show: true, val: val.invoice_number })}
            className="text-[#009EA9] cursor-pointer">
            Unggah Bukti Bayar
          </div>
        ) : (
          <div
            onClick={() =>
              val?.by === 'buyer'
                ? isOpen({ show: true, val: val.invoice_number })
                : isOpen({ show: true, val: val.invoice_number })
            }
            className="text-[#009EA9] cursor-pointer">
            Setujui
          </div>
        )}
      </td>
    </tr>
  ));
};
export default DataTransaction;
