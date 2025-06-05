import { Controller } from 'react-hook-form';

function WithController(Component: any, options?: any) {
  const WrappedComponent = (props: any) => {
    const {
      name,
      control,
      rules,
      defaultValue,
      errors = {},
      ...rest
    }: any = props;

    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue ?? options?.defaultValue ?? null}
        render={({ field: { value, onChange, onBlur, ref } }) => (
          <Component
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            innerRef={ref}
            {...rest}
          />
        )}
      />
    );
  };

  const componentName = Component.displayName || Component.name || 'Component';
  WrappedComponent.displayName = `WithController(${componentName})`;

  return WrappedComponent;
}

export default WithController;
