import { Modal } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import InputBuyerForm from '../Form/InputBuyerForm';

interface InputDataBuyerModalProps {
  isOpen: string;
  setIsOpen: any;
}

const InputDataBuyerModal = ({
  isOpen,
  setIsOpen,
}: InputDataBuyerModalProps) => {
  const { handleSubmit, control, clearErrors, reset } = useForm<any>();

  const onSubmit = () => {
    setIsOpen('successSellerModal');
    resetVal();
  };

  const handleClose = () => {
    setIsOpen('finishedByModal');
    resetVal();
  };

  const resetVal = () => {
    reset({
      name: '',
      phone: '',
      email: '',
      address: '',
      npwp: '',
    });
    clearErrors();
  };

  return (
    <Modal
      size="auto"
      withCloseButton={false}
      centered
      onClose={() => setIsOpen('')}
      className="overflow-visible"
      opened={isOpen === 'inputDataBuyerModal'}>
      <div className="sm:w-[528px] w-full max-h-auto max-h-[600px] overflow-y-auto">
        <div className="text-[#444B55] items-center flex justify-between font-bold mb-[16px] space-x-[8px]">
          <div className="space-y-[4px]">
            <p className="block">Pengajuan Pembayaran BTP Oleh Buyer</p>
          </div>
          <div
            data-testid="btn_close_upload_certificate"
            className="cursor-pointer"
            onClick={() => {
              setIsOpen('');
              resetVal();
            }}>
            <IoClose className="block text-paletteText-primary text-[24px] font-bold cursor-pointer" />
          </div>
        </div>
        <InputBuyerForm
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          handleClose={handleClose}
        />
      </div>
    </Modal>
  );
};

export default InputDataBuyerModal;
