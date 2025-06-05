import { Form, FormOption } from 'Types/form';

export interface OrderFinder {
  po_number?: string;
  invoice_number?: string;
  payment_type?: string;
  status_name?: string;
  status_id?: number;
  subtotal?: number;
  total?: number;
  shipping_cost?: number;
  shipping_discount?: number;
  shipping_pph?: number;
  ppn_by?: string;
  pph?: number;
  ppn?: number;
  shipping_ppn?: number;
  payment_method?: string;
  bank_account?: string;
  bank_name?: string;
  invoice_date?: string;
}

export interface OrderDetail {
  _id?: string;
  original?: Omit<OrderFinder, 'invoice_number' | 'po_number'>;
  revised?: Omit<OrderFinder, 'invoice_number' | 'po_number'>;
  purchase_order_number?: string;
  created_at?: string;
  finish_at?: string;
  invoice_number?: string;
  status?: string;
  reason?: string;
  notes?: string;
  user_transaction?: {
    email?: string;
    group_name?: string;
  };
  user?: {
    email?: string;
  };
}

export interface RequestOrder extends Form {}
