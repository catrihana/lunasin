import { useRef } from 'react';
import { HiOutlineDocument } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
// import P12Logo from 'public/assets/icon/doc-p12.svg';
// import { Image } from '@mantine/core';

type UploadButtonProps = {
  errorFile: string;
  setErrorFile: (value: string) => void;
  setValue: (value: string, file: any) => void;
  errors: any;
  thumbnail: any;
  setThumbnail: (value: any) => void;
  clearErrors: any;
};

const UploadButton = ({
  errorFile,
  setErrorFile,
  setValue,
  errors,
  thumbnail,
  setThumbnail,
  clearErrors,
}: UploadButtonProps) => {
  const filesUpload = useRef<any>(null);

  const handleInputFile = (e: any) => {
    const file = e?.target?.files[0];

    if (file) {
      setValue('upload', file);
      setThumbnail(file);
      filesUpload.current.value = null;
      clearErrors('upload');
    } else if (!file) {
      setErrorFile('File harus diisi');
    }
    setErrorFile('');
  };

  return (
    <>
      <div className="bg-[#F9FAFA] p-4 space-y-2">
        <div
          className={`flex justify-between ${
            thumbnail
              ? 'bg-inactive hover:bg-slate-50'
              : 'bg-white border-gray-500 border-dashed border'
          } py-3 rounded-md cursor-pointer`}
          onClick={() => filesUpload.current.click()}>
          {thumbnail ? (
            <>
              <div className="flex my-auto gap-2 ml-2 py-[50px]">
                <div>
                  <p className="font-medium text-sm text-[#444B55]">
                    {thumbnail?.name}
                  </p>
                  <p className="font-bold text-xs text-[#808C92]">
                    {(thumbnail?.size / 1024).toFixed(2)} Kb
                  </p>
                </div>
              </div>
              <div className="flex gap-2 my-auto mr-[23px] py-[50px]">
                <div className="my-auto">
                  <IoMdClose
                    data-testid="button_close_file"
                    size={20}
                    className="cursor-pointer text-[#444B55]"
                    onClick={() => {
                      setValue('upload', null); // Reset value in form
                      setThumbnail(null);
                      setErrorFile('File harus diisi'); // Set error message
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-[125px] flex gap-2 mx-auto my-auto items-center text-[#808C92]">
                <div>
                  <HiOutlineDocument size={25} />
                </div>
                <div className="text-sm">
                  <p>Klik untuk unggah bukti bayar</p>
                </div>
              </div>
            </>
          )}
        </div>
        {errors.upload ? (
          <div className="text-xs text-[#ee3124]">{errors.upload.message}</div>
        ) : errorFile ? (
          <div className="text-xs text-[#ee3124]">{errorFile}</div>
        ) : (
          <></>
        )}
        <div className="text-xs text-[#444B55]">
          Pastikan seluruh infomasi bayar jelas
        </div>
      </div>
      <input
        data-testid="btn_click_upload_dokumen_nsfp"
        className="hidden"
        ref={filesUpload}
        id="upload"
        name="upload"
        type="file"
        onChange={(e) => {
          handleInputFile(e);
        }}
      />
    </>
  );
};

export default UploadButton;
