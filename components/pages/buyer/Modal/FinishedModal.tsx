import { Button, Image, Modal } from '@mantine/core';
import General from 'public/static/General Konfirmasi.svg';

interface FinishedModalProps {
  isOpen: string;
  setIsOpen: (value: string) => void;
}

const FinishedModal = ({ isOpen, setIsOpen }: FinishedModalProps) => {
  return (
    <Modal
      size="auto"
      withCloseButton={false}
      centered
      onClose={() => setIsOpen('')}
      className="overflow-visible"
      opened={isOpen === 'finishedModal'}>
      <div className="w-full sm:w-[528px] block mx-auto max-h-auto space-y-4">
        <div className="flex flex-col items-center space-y-[16px]">
          <Image src={General.src} alt="general" maw={300} />
          <div className="text-[#444B55] font-bold">Selesaikan Transkasi</div>
          <div className="text-[#444B55] text-sm">
            Apakah anda sudah melakukan pembayaran?
          </div>
        </div>
        <div className="flex items-center justify-between space-x-[16px]">
          <Button
            className="w-full bg-[#009EA9] hover:bg-[#009EA9]"
            onClick={() => {
              setIsOpen('');
              window.open('/ip');
            }}>
            Belum Bayar
          </Button>
          <Button
            className="w-full bg-[#009EA9] hover:bg-[#009EA9]"
            onClick={() => setIsOpen('finishedByModal')}>
            Sudah Bayar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FinishedModal;
