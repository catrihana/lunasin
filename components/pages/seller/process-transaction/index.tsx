import { GoShareAndroid } from 'react-icons/go';
import constants from './constant';
import DataTransaction from './DataTransaction';
import CardDashboard from '../CardDashboard';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { dashboardListPayment } from 'Constants/summary-transaction';
import { Image, TextInput as Input } from '@mantine/core';
import General from 'public/static/icons/clipboard-tick.svg';
import { IoSearch } from 'react-icons/io5';

const ProcessTransaction = ({ isOpen, setIsSuccess }: any) => {
  const TextInput: any = Input;
  const status = 'OVERDUE';
  const { menu, thTable } = constants;
  const [pageNumber, setPageNumber] = useState<any>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(
    dashboardListPayment?.orders ?? [],
  );

  useEffect(() => {
    setFilteredData(dashboardListPayment?.orders ?? []);
  }, []);

  const onChangePage = (page: any) => {
    setPageNumber(page.currentPage);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = dashboardListPayment?.orders?.filter((item: any) =>
      item.invoice_number.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredData(filtered ?? []);
  };

  return (
    <div className="my-4">
      <CardDashboard
        type={false}
        customClass="!border-0 !p-0 w-full mx-auto bg-white">
        <div className="w-full space-y-6 bg-white">
          <div className="w-full mx-auto">
            <div className="space-y-6">
              <div className="border border-[#2C2C2C] rounded-lg flex flex-col">
                <div className="flex items-center justify-between space-x-8 m-4">
                  <div className="flex space-x-2">
                    <Image src={General.src} maw={24} mah={24} alt="icons" />
                    <p>Pengajuan Penyelesaian Transaksi</p>
                  </div>
                  <div>
                    <TextInput
                      leftSectionPointerEvents="none"
                      icon={<IoSearch />}
                      placeholder="Cari nomor invoice"
                      value={searchTerm}
                      onChange={(e: any) => handleSearch(e.currentTarget.value)}
                    />
                  </div>
                </div>
                <div className="w-full space-y-4 mb-4">
                  <div className="flex flex-col">
                    <div className="overflow-x-auto">
                      <div className="inline-block min-w-full">
                        <div className="overflow-hidden">
                          <table className="min-w-full">
                            <thead className="border-b">
                              <tr>
                                {thTable?.map((item: any, idx: number) => (
                                  <th
                                    key={idx}
                                    scope="col"
                                    className="text-sm text-[#444B55] font-normal px-4 py-2 text-left">
                                    {item}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="w-[50%]">
                              <DataTransaction
                                data={filteredData}
                                isOpen={isOpen}
                                setIsSuccess={setIsSuccess}
                              />
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {dashboardListPayment?.paginator?.pageCount ? (
                    <div className="flex justify-end mr-4">
                      <Pagination
                        customButton
                        pageLimit={dashboardListPayment?.paginator?.limit}
                        totalRecords={
                          dashboardListPayment?.paginator?.itemCount ?? 0
                        }
                        currentPage={dashboardListPayment?.paginator?.page}
                        onPageChanged={(data: any) => onChangePage(data)}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardDashboard>
    </div>
  );
};

export default ProcessTransaction;
