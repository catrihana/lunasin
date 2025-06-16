import { Button, Image, Modal } from '@mantine/core';
import General from 'public/static/General Konfirmasi.svg';

interface SuccessModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SuccessModal = ({ isOpen, setIsOpen }: SuccessModalProps) => {
  return (
    <Modal
      size="auto"
      withCloseButton={false}
      centered
      onClose={() => setIsOpen(false)}
      className="overflow-visible"
      opened={isOpen}>
      <div className="w-full sm:w-[528px] block mx-auto max-h-auto space-y-4">
        <div className="flex flex-col items-center space-y-[16px]">
          <Image src={General.src} alt="general" maw={300} />
          <div className="text-[#444B55] font-bold">
           Pengajuan Berhasil Disetujui
          </div>
          <div className="text-[#444B55]">Transaksi akan selesai setelah pembeli melakukan pembayaran biaya transkasi</div>
        </div>
        <div className="flex items-center justify-between space-x-[16px]">
          <Button
            className="w-full bg-[#009EA9] hover:bg-[#009EA9]"
            onClick={() => setIsOpen(false)}>
            Tutup
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
