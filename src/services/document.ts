import { HTTPClientAuth } from 'Config/http';
const uri = 'update-order';

export const getInvoice = ({ queryKey }: any) => {
  const [, { id }] = queryKey;

  return HTTPClientAuth().get(`${uri}/${id}/invoice`);
};
