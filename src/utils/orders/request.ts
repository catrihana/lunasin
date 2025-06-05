import { RequestOrder } from 'Interfaces/order';

const originalObj = {
  payment_type: null,
  status_name: null,
  status_id: null,
  subtotal: null,
  total: null,
  shipping_cost: null,
  shipping_discount: null,
  shipping_pph: null,
  ppn_by: null,
  pph: null,
  ppn: null,
  shipping_ppn: null,
  payment_method: null,
  bank_account: null,
  bank_name: null,
  invoice_date: null,
};

const currencyToInt = (value: string) => {
  const finalValue = value?.toString()?.replace(/\./g, '');

  return value && parseInt(finalValue);
};

const mapOrderRevisedAndOriginalFromFEtoBE = (
  formVal: any,
  defaultValue: any,
) => {
  const {
    ppn_by = {},
    payment_method = {},
    shipping_cost,
    shipping_discount,
    shipping_pph,
    pph,
    ppn,
    total,
  } = formVal?.revised || {};

  let original = {};

  Object.keys(originalObj).forEach((_originalObj) => {
    original = {
      ...original,
      [_originalObj]: defaultValue?.[_originalObj],
    };
  });

  const revised = {
    ...formVal.revised,

    ppn_by: ppn_by?.value,
    payment_method: payment_method?.value,
    bank_name: payment_method?.label,

    shipping_cost: currencyToInt(shipping_cost),
    shipping_discount: currencyToInt(shipping_discount),
    shipping_pph: currencyToInt(shipping_pph),
    pph: currencyToInt(pph),
    ppn: currencyToInt(ppn),
    total: currencyToInt(total),
  };

  return {
    original,
    revised,
  };
};

export const mapOrderFromFEtoBE = (formVal: any, defaultValue: any) => {
  const { invoice_number, po_number }: any = defaultValue;

  const finalFormVal = {
    ...formVal,

    invoice_number: invoice_number,
    purchase_order_number: po_number,

    ...mapOrderRevisedAndOriginalFromFEtoBE(formVal, defaultValue),

    reason: formVal?.reason ?? '',
    user: defaultValue?.user,
    user_transaction: defaultValue?.user_transaction,
    seller_transaction: defaultValue?.seller_transaction,
  };

  return finalFormVal;
};
