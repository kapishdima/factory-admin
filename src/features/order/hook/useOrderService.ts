import { useState } from 'react';

import { Service } from 'entities/order';
import { useOrderCreationFlow } from './useOrderCreationFlow';

export const useOrderService = () => {
  const { getCurrentValue } = useOrderCreationFlow();
  console.log(getCurrentValue());
  const defaultService = getCurrentValue() ? getCurrentValue()['service'] : null;
  const [service, setService] = useState<Service>(defaultService);

  const onServiceClick = (service: Service) => {
    setService(service);
  };

  return {
    service,
    onServiceClick,
  };
};
