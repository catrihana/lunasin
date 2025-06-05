import { useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import CardDashboard from '../CardDashboard';
import { priceFormat, useOutsideClick } from 'src/utils/dashboard-buyer';
import { Dropdown } from '../Dropdown';
import { dataDashboardRFQ } from 'Constants/summary-transaction';

export type RFQType = 'Terbuka' | 'Tertutup' | undefined;

interface FilterByType {
  label: string;
  value: RFQType;
}

const orderBys: FilterByType[] = [
  { label: 'Terbuka', value: 'Terbuka' },
  { label: 'Tertutup', value: 'Tertutup' },
  { label: 'Semua', value: undefined },
];

const initialFilterState = {
  label: 'Semua',
  value: undefined,
};

const SectionDashboardRFQ = () => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [filterByOpen, setFilterByOpen] = useState<boolean>(false);
  const [filterBy, setFilterBy] = useState<FilterByType>(initialFilterState);

  const onFilterBy = (selectedFilterBy: FilterByType) => {
    setFilterBy(selectedFilterBy);
    setFilterByOpen(false);
  };

  const toggleFilter = () => {
    setFilterByOpen((prev: boolean) => !prev);
  };

  useOutsideClick(ref, () => {
    if (filterBy) {
      setFilterByOpen(false);
    }
  });

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-3 lg:pb-4 pb-2 ">
        <div className="font-bold text-xl text-[#333346] py-2">
          <p>Tender Kilat</p>
        </div>
        <div
          ref={ref}
          className="flex relative w-full lg:w-fit items-center lg:justify-end mb-2 lg:mb-0 justify-between">
          <div className="font-medium text-sm text-paletteText-primary lg:mx-2">
            Filter Berdasarkan
          </div>
          <button
            id="order-button-dropdown"
            onClick={() => toggleFilter()}
            className="w-fit border border-borderCard-textFieldBorder bg-white rounded p-2 text-sm text-paletteText-primary font-medium hover:bg-primary-10 hover:text-white focus:border-primary-70">
            <div className="flex justify-between items-center border-primary-70">
              <div className="mr-1 flex">
                <div className="truncate">{filterBy?.label}</div>
              </div>
              <FiChevronDown className="cursor-pointer" />
            </div>
          </button>
          <Dropdown isOpen={filterByOpen} additionalClassName="w-full p-2">
            {orderBys.map((val: any, key: number) => {
              const selected = filterBy?.value === val.value;
              return (
                <div
                  key={key}
                  className={`${
                    selected ? 'bg-borderCard-card text-primary-70' : ''
                  } hover:bg-borderCard-card cursor-pointer p-1`}
                  onClick={() => onFilterBy(val)}>
                  <div>{val.label}</div>
                </div>
              );
            })}
          </Dropdown>
        </div>
      </div>
      <CardDashboard type={false} customClass="bg-white">
        <div className="grid lg:grid-cols-3 gap-4 w-full">
          <div className="h-[100px] border rounded-lg p-5 space-y-1 group relative">
            <div className="font-normal text-sm text-[#444B55]">Diajukan</div>
            <div className="font-bold text-2xl leading-[44px] text-[#333346]">
              {dataDashboardRFQ?.rfq?.active}
            </div>
            <div className="pointer-events-none absolute top-[103px] right-0 left-0 w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Jumlah RFQ yang diajukan dari Buyer Group
            </div>
          </div>
          <div className="h-[100px] border rounded-lg p-5 space-y-1 group relative">
            <div className="font-normal text-sm text-[#444B55]">Selesai</div>
            <div className="font-bold text-2xl leading-[44px] text-[#333346]">
              {dataDashboardRFQ?.rfq?.finished}
            </div>
            <div className="pointer-events-none absolute top-[103px] right-0 left-0 w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Jumlah RFQ yang selesai dari Buyer Group
            </div>
          </div>
          <div className="h-[100px] border rounded-lg p-5 space-y-1 group relative">
            <div className="font-normal text-sm text-[#444B55]">Kedaluarsa</div>
            <div className="font-bold text-2xl leading-[44px] text-[#333346]">
              {dataDashboardRFQ?.rfq?.expired}
            </div>
            <div className="pointer-events-none absolute top-[103px] right-0 left-0 w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Jumlah RFQ yang kedaluarsa dari Buyer Group
            </div>
          </div>
          <div className="h-[100px] border rounded-lg p-5 space-y-1 group relative">
            <div className="font-normal text-sm text-[#444B55]">
              Dengan Penawaran
            </div>
            <div className="font-bold text-2xl leading-[44px] text-[#333346]">
              {dataDashboardRFQ?.rfq?.with_offering}
            </div>
            <div className="pointer-events-none absolute top-[103px] right-0 left-0 w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Jumlah RFQ dari Buyer Group yang telah memiliki penawaran
            </div>
          </div>
          <div className="h-[100px] border rounded-lg p-5 space-y-1 group relative">
            <div className="font-normal text-sm text-[#444B55]">
              Tanpa Penawaran
            </div>
            <div className="font-bold text-2xl leading-[44px] text-[#333346]">
              {dataDashboardRFQ?.rfq?.without_offering}
            </div>
            <div className="pointer-events-none absolute top-[103px] right-0 left-0 w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Jumlah RFQ dari Buyer Group yang belum memiliki penawaran
            </div>
          </div>
          <div className="h-[100px] border rounded-lg p-5 space-y-1 group relative">
            <div className="font-normal text-sm text-[#444B55]">
              Total Transaksi
            </div>
            <div className="font-bold text-2xl leading-[44px] text-[#333346]">
              {priceFormat(dataDashboardRFQ?.total_transaction)}
            </div>
            <div className="pointer-events-none absolute top-[103px] right-0 left-0 w-auto z-50 rounded bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Total transaksi RFQ dari Buyer Group
            </div>
          </div>
        </div>
      </CardDashboard>
    </section>
  );
};

export default SectionDashboardRFQ;
