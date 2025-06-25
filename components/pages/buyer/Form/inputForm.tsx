import { Button, TextInput } from '@mantine/core';
import { Controller } from 'react-hook-form';

type InputFormProps = {
  control: any;
  handleSubmit: any;
  onSubmit: any;
  handleClose: () => void;
};

const InputForm = ({
  control,
  handleSubmit,
  onSubmit,
  handleClose,
}: InputFormProps) => {
  return (
    <div className="space-y-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        autoComplete="off">
        <div className="space-y-4">
          <div className="space-y-2 w-full">
            <label className="capitalize text-sm font-medium text-[#444B55]">
              Nama :
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextInput
                  autoComplete="off"
                  type="text"
                  placeholder="John"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                />
              )}
            />
          </div>
          <div className="space-y-2 w-full">
            <label className="capitalize text-sm font-medium text-[#444B55]">
              No Hp :
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextInput
                  autoComplete="off"
                  type="text"
                  placeholder="085xxxxxxxxx"
                  {...field}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, '');
                    if (value.length > 1 && value[1] === '0') {
                      return;
                    }
                    value = value.slice(0, 13);
                    field.onChange(value);
                  }}
                />
              )}
            />
          </div>
          <div className="space-y-2 w-full">
            <label className="capitalize text-sm font-medium text-[#444B55]">
              Email :
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  autoComplete="off"
                  type="text"
                  placeholder="john@gmail.com"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </div>
          <div className="space-y-2 w-full">
            <label className="text-sm font-medium text-[#444B55]">
              Alamat :
            </label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextInput
                  autoComplete="new-password"
                  type="text"
                  placeholder="Jalan yang indah"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                />
              )}
            />
          </div>
          <div className="space-y-2 w-full">
            <label className="capitalize text-sm font-medium text-[#444B55]">
              Nomor NPWP :
            </label>
            <Controller
              name="npwp"
              control={control}
              render={({ field }) => (
                <TextInput
                  autoComplete="off"
                  type="text"
                  placeholder="8888887777xxxxx"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, '')
                      .slice(0, 16);
                    field.onChange(value);
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full pb-[26px]">
          <Button
            color="secondary"
            className="w-full border-[#444B55] text-[#444B55]"
            variant="outline"
            onClick={() => handleClose()}>
            Sebelumnya
          </Button>
          <Button
            type="submit"
            className="w-full bg-[#009EA9] hover:bg-[#009EA9]">
            Ajukan
          </Button>
        </div>
      </form>
    </div>
  );
};
export default InputForm;
