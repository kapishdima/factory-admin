import { Routes } from 'app/router';
import { useLocation, useNavigate } from 'react-router-dom';
import { Order, OrderInfo, OrderService } from '../order';

export const useOrderCreationFlow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const saveOrderInfo = (value: OrderInfo) => {
    navigate(Routes.OrderSelectService, { state: { ...value } });
  };

  const saveOrderService = (value: OrderService) => {
    navigate(Routes.OrderConfirm, { state: { ...location.state, ...value } });
  };

  const submitOrder = (value: Order) => {
    const payload = { ...location.state, ...value };
    console.log(payload);
  };

  const getCurrentValue = () => location.state;

  return { saveOrderInfo, saveOrderService, submitOrder, getCurrentValue };
};
