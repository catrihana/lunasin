import { Button, Image, Modal } from '@mantine/core';
import General from 'public/static/General Konfirmasi.svg';

interface SuccessSellerProccessModalProps {
  isOpen: string;
  setIsOpen: (value: string) => void;
}

const SuccessSellerProccessModal = ({
  isOpen,
  setIsOpen,
}: SuccessSellerProccessModalProps) => {
  return (
    <Modal
      size="auto"
      withCloseButton={false}
      centered
      onClose={() => setIsOpen('')}
      className="overflow-visible"
      opened={isOpen === 'successBuyerProcessModal'}>
      <div className="w-full sm:w-[528px] block mx-auto max-h-auto space-y-4">
        <div className="flex flex-col items-center space-y-[16px]">
          <Image src={General.src} alt="general" maw={300} />
          <div className="text-[#444B55] font-bold">
            Pengajuan Berhasil Dikirim
          </div>
          <div className="text-[#444B55] text-center text-sm">
            Penjual dapat melakukan pembayaran biaya transaksi setelah invoice
            terbit maksimal 3x 24 sejak pengajuan dikirim.
          </div>
        </div>
        <div className="flex items-center justify-between space-x-[16px]">
          <Button
            className="w-full bg-[#009EA9] hover:bg-[#009EA9]"
            onClick={() => setIsOpen('')}>
            Tutup
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessSellerProccessModal;
