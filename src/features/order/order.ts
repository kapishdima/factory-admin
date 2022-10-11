import { Service } from 'entities/order';

export type Order = {
  name: string;
  description: string;
  service: Service;
  file: File[];
};

export type OrderInfo = Pick<Order, 'name' | 'description'>;
export type OrderService = Pick<Order, 'service'>;
