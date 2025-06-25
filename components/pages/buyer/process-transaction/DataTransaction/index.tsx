import moment from 'moment';
import Link from 'next/link';
import { priceFormat } from 'src/utils/dashboard-buyer';

const DataTransaction = ({ data, isOpen, setIsSuccess }: any) => {
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
      <td className="text-sm text-[#009EA9] underline font-semibold p-4 whitespace-nowrap w-1/4">
        #{val?.invoice_number ?? '-'}
      </td>
      <td className="text-sm text-gray-900 font-normal p-4 whitespace-nowrap w-1/4">
        {priceFormat(val?.price_total) ?? '-'}
      </td>
      <td className="text-sm text-gray-900 font-normal p-4 whitespace-nowrap w-1/4">
        {val?.invoice_date
          ? `${moment(val?.invoice_date).format('DD MMM YYYY, H:mm')} WIB`
          : '-'}
      </td>
      <td className="text-sm text-gray-900 font-normal p-4 whitespace-nowrap w-1/4">
        {val?.due_at
          ? `${moment(val?.due_at).format('DD MMM YYYY, H:mm')} WIB`
          : '-'}
      </td>
      <td className="space-x-1 flex text-sm text-[#009EA9] font-semibold p-4 whitespace-nowrap w-1/4">
        {val?.done ? (
          <div
            className="cursor-pointer"
            onClick={() => setIsSuccess('finishedModal')}>
            <span>Selesaikan Transaksi</span>
          </div>
        ) : val?.detail ? (
          <Link href={'/ip'} rel="noreferrer noopener" target="_blank">
            <span>Lihat Detail Pengajuan</span>
          </Link>
        ) : (
          <>
            <Link href={'/ip'} rel="noreferrer noopener" target="_blank">
              <span>Invoice</span>
            </Link>
            <p>|</p>
            <Link href={'/ip'} rel="noreferrer noopener" target="_blank">
              <span>Faktur</span>
            </Link>
          </>
        )}
      </td>
      <td className="text-sm font-semibold p-4 whitespace-nowrap w-1/4">
        {val?.detail ? (
          <div className="text-[#B3B3B3] cursor-not-allowed">
            Menunggu Pembayaran
          </div>
        ) : val?.done ? null : (
          <div
            onClick={() => isOpen({ show: true, val: val.invoice_number })}
            className="text-[#009EA9] cursor-pointer">
            Unggah Bukti Bayar
          </div>
        )}
      </td>
    </tr>
  ));
};
export default DataTransaction;
