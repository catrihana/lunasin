import { HTTPClientAuth } from 'Config/http';

const uri = 'update-order';

export const getUpdateOrder = ({ queryKey }: any) => {
  const [, params] = queryKey;

  return HTTPClientAuth().get(uri, {
    params: {
      ...params,
      limit: 10,
    },
  });
};

export const getUpdateOrderById = ({ queryKey }: any) => {
  const [, { id }] = queryKey;

  return HTTPClientAuth().get(`${uri}/${id}`);
};

export const getFindOrder = ({ queryKey }: any) => {
  const [, params] = queryKey;

  return HTTPClientAuth().get('order', {
    params: {
      ...params,
    },
  });
};

export const addRevisionOrder = (form: any) => {
  return HTTPClientAuth().post(uri, form);
};

export const getDownloadData = ({ queryKey }: any) => {
  const [, params] = queryKey;

  return HTTPClientAuth().get(`${uri}/download`, {
    params: {
      ...params,
      limit: 10,
    },
  });
};
