import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Routes } from 'app/router';
import { createOrder, Service, OrderRequest } from 'entities/order';

type OrderInfo = Pick<OrderRequest, 'project_name' | 'description'>;

export const useOrderCreationFlow = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(createOrder);

  const saveOrderInfo = (value: OrderInfo) => {
    navigate(Routes.OrderSelectService, { state: { ...value } });
  };

  const saveOrderService = (service: Service) => {
    if (!service) {
      return toast('Please, select service', { type: 'error', theme: 'colored' });
    }
    navigate(Routes.OrderConfirm, { state: { ...location.state, service } });
  };

  const submitOrder = (value: OrderRequest) => {
    const payload: OrderRequest = {
      project_name: value.project_name,
      description: value.description,
      service_config_id: location.state.service.id,
      documents: value.documents,
      user_address: value.user_address || {},
    };

    mutate(payload, {
      onSuccess: () => {
        toast('Order successfully placed!', { type: 'success', theme: 'colored' });
      },
    });
  };

  const getCurrentValue = () => location.state;

  return { saveOrderInfo, saveOrderService, submitOrder, getCurrentValue, isLoading };
};
