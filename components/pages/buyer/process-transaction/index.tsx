import { GoShareAndroid } from 'react-icons/go';
import constants from './constant';
import DataTransaction from './DataTransaction';
import CardDashboard from '../CardDashboard';
import { useState } from 'react';
import Pagination from '../Pagination';
import { dashboardListPayment } from 'Constants/summary-transaction';

const ProcessTransaction = ({ isOpen, setIsSuccess }: any) => {
  const status = 'OVERDUE';
  const { menu, thTable } = constants;
  const [pageNumber, setPageNumber] = useState<any>(1);
  const onChangePage = (page: any) => {
    setPageNumber(page.currentPage);
  };

  return (
    <div className="my-4">
      <CardDashboard
        type={false}
        customClass="!border-0 !p-0 w-full mx-auto bg-white">
        <div className="w-full space-y-6 bg-white">
          <div className="w-full mx-auto">
            <div>
              <div className="space-y-6">
                <div className="border rounded-lg flex flex-col">
                  <div className="flex items-center justify-between space-x-8">
                    <div className="space-x-8 mx-6 overflow-x-auto overflow-y-hidden flex">
                      {menu?.map((value: any, idx: number) => {
                        return (
                          <div
                            key={idx}
                            className={`py-[22px] text-base ${
                              status === value?.value
                                ? 'border-[#009EA9] border-b-[3px] text-[#009EA9] font-bold'
                                : 'text-paletteText-inactive'
                            } cursor-pointer whitespace-nowrap`}>
                            {value.label}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <div className="mr-4 space-x-2 flex items-center">
                        <button className="flex items-center space-x-1 w-fit h-fit bg-white py-[9px] px-4 rounded-lg border-[#009EA9] border hover:bg-[#009EA9] text-[#009EA9] hover:text-white">
                          <GoShareAndroid />
                          <div className="md:block text-nowrap hidden space-x-2 text-[12px] font-medium">
                            <div>Kirim Email</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                                  data={dashboardListPayment}
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
        </div>
      </CardDashboard>
    </div>
  );
};
export default ProcessTransaction;
