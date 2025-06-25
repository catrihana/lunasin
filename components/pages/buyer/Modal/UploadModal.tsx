import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import UploadForm from './UploadForm';
import { Modal } from '@mantine/core';
import { useMutation } from 'react-query';
import { upload } from 'Services/dashboard';
import { MetaResponse } from 'Hooks/use-validate';
import { toast } from 'react-toastify';

interface IsOpenProps {
  show: boolean;
  val: string;
}

interface UploadModalProps {
  isOpen: IsOpenProps;
  setIsOpen: (value: IsOpenProps) => void;
  setIsLoading: (value: boolean) => void;
  setIsSuccess: (value: string) => void;
}

const UploadModal = ({
  isOpen,
  setIsOpen,
  setIsLoading,
  setIsSuccess,
}: UploadModalProps) => {
  const [errorFile, setErrorFile] = useState<any>();
  const [thumbnail, setThumbnail] = useState<any>(null);

  const {
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<any>();
  const mutation = useMutation(upload);

  const onSubmit = (values: any) => {
    const dataForm: any = new FormData();
    isOpen.val && dataForm.append('invoice_number', isOpen?.val);
    values?.upload && dataForm.append('image', values?.upload);
    if (!errorFile) {
      setIsLoading(true);
      mutation.mutate(dataForm, {
        onSuccess: ({ data }) => {
          setIsLoading(false);
          if (data?.success) {
            setIsSuccess('successModal');
          }
          if (!data?.success) {
            toast.error(data?.message, {
              position: 'bottom-center',
              hideProgressBar: true,
              autoClose: 2500,
            });
          }
        },
        onError: ({ response }: any) => {
          const { data } = response ?? {};
          setIsLoading(false);
          toast.error(data?.message, {
            position: 'bottom-center',
            hideProgressBar: true,
            autoClose: 2500,
          });
        },
      });
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen({ show: false, val: '' });
    resetVal();
  };

  const resetVal = () => {
    reset({
      upload: null,
    });
    setThumbnail(null);
    setErrorFile('');
    clearErrors();
  };

  return (
    <Modal
      size="auto"
      withCloseButton={false}
      centered
      onClose={handleClose}
      className="overflow-visible"
      opened={isOpen.show}>
      <div className="sm:w-[528px] w-full max-h-auto max-h-[600px] overflow-y-auto">
        <div className="text-[#444B55] items-center flex justify-between font-bold mb-[16px] space-x-[8px]">
          <div className="space-y-[4px]">
            <p className="block">Unggah Bukti Bayar Biaya Transkasi</p>
          </div>
          <div
            data-testid="btn_close_upload_certificate"
            className="cursor-pointer"
            onClick={() => {
              handleClose();
            }}>
            <IoClose className="block text-paletteText-primary text-[24px] font-bold cursor-pointer" />
          </div>
        </div>
        <UploadForm
          setValue={setValue}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          handleClose={handleClose}
          errors={errors}
          setErrorFile={setErrorFile}
          errorFile={errorFile}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
          clearErrors={clearErrors}
        />
      </div>
    </Modal>
  );
};

export default UploadModal;
