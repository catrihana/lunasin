import UploadButton from './UploadButton';
import { Button } from '@mantine/core';

type UploadFormProps = {
  setValue: any;
  handleSubmit: any;
  onSubmit: any;
  handleClose: () => void;
  errors: any;
  setErrorFile: (value: string) => void;
  errorFile: any;
  thumbnail: any;
  setThumbnail: (value: any) => void;
  clearErrors: any;
};

const UploadForm = ({
  setValue,
  handleSubmit,
  onSubmit,
  handleClose,
  errors,
  setErrorFile,
  errorFile,
  thumbnail,
  setThumbnail,
  clearErrors,
}: UploadFormProps) => {
  return (
    <div className="space-y-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        autoComplete="off">
        <UploadButton
          errorFile={errorFile}
          setErrorFile={setErrorFile}
          setValue={setValue}
          errors={errors}
          thumbnail={thumbnail}
          setThumbnail={setThumbnail}
          clearErrors={clearErrors}
        />
        <div className="flex items-center justify-between space-x-4">
          <Button
            variant="outline"
            className="w-full border-[#444B55] text-[#444B55]"
            onClick={() => {
              handleClose();
            }}>
            Batal
          </Button>
          <Button
            disabled={!!errorFile || !thumbnail}
            className="w-full bg-[#009EA9] hover:bg-[#009EA9]"
            type="submit">
            Unggah
          </Button>
        </div>
      </form>
    </div>
  );
};
export default UploadForm;
