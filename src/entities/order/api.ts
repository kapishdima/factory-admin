import { http } from 'app/http/client';
import { OrderRequest, ServiceResponse } from './types';

export const getServices = async () => {
  const { data } = await http.get<ServiceResponse>('/service-configs');
  return data.configs.filter((service) => service.active);
};

export const createOrder = async (payload: OrderRequest) => {
  const { data } = await http.post('/orders', payload);
  console.log(data);
  return data;
};
