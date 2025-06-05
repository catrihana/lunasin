import { HTTPClientNonAuth } from '../../config/http';

export const getList = () => {
  return HTTPClientNonAuth().get('/list');
};

export const upload = (payload: FormData) => {
  return HTTPClientNonAuth('multipart/form-data').post('/upload', payload);
};
