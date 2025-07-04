import Layout from 'components/Layouts';
import LoadingModal from 'components/LoadingModal';
import FinishedByModal from 'components/pages/buyer/Modal/FinishedByModal';
import FinishedModal from 'components/pages/buyer/Modal/FinishedModal';
import InputDataModal from 'components/pages/buyer/Modal/InputDataModal';
import SuccessBuyerProccessModal from 'components/pages/buyer/Modal/SuccessBuyerProccessModal';
import SuccessModal from 'components/pages/buyer/Modal/SuccessModal';
import SuccessOnProccessModal from 'components/pages/buyer/Modal/SuccessOnProccessModal';
import UploadModal from 'components/pages/buyer/Modal/UploadModal';
import ProcessTransaction from 'components/pages/buyer/process-transaction';
import SectionDashboardRFQ from 'components/pages/buyer/SectionDashboardRFQ';
import SummaryTransaction from 'components/pages/buyer/summary-transaction';
import SideBarMenu from 'components/SideBarMenu';
import { useState } from 'react';

export default function Buyer() {
  const [isOpen, setIsOpen] = useState<{ show: boolean; val: string }>({
    show: false,
    val: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<string>('');

  return (
    <Layout customClass="!bg-[#F6F9FC]">
      <div className="flex flex-col lg:flex-row xl:flex-row h-full relative">
        <SideBarMenu />
        <div className="grow w-full space-y-4 lg:w-7/12 lg:py-10 lg:px-14 px-8">
          <div className="font-bold text-2xl leading-9 text-[#333346]">
            Dashboard
          </div>
          <div className="font-bold text-[18px] leading-9 text-[#444B55]">
            Ringkasan Transaksi
          </div>
          <div className="w-full relative">
            <SummaryTransaction />
          </div>
          <ProcessTransaction isOpen={setIsOpen} setIsSuccess={setIsSuccess} />
          <SectionDashboardRFQ />
        </div>
      </div>
      <UploadModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsLoading={setIsLoading}
        setIsSuccess={setIsSuccess}
      />
      <SuccessModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <FinishedModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <FinishedByModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <SuccessOnProccessModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <InputDataModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <SuccessBuyerProccessModal isOpen={isSuccess} setIsOpen={setIsSuccess} />
      <LoadingModal isOpen={isLoading} />
    </Layout>
  );
}
