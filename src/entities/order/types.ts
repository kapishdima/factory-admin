export type Service = {
  id: number;
  name: string;
  offer_text: string;
  price: number;
  currency: string;
  description: string;
  active: boolean;
  valid_upto: any;
  show_address: boolean;
};

export type ServiceResponse = {
  configs: Service[];
};

export type OrderRequest = {
  project_name: string;
  description: string;
  service_config_id: number;
  user_address: {
    address1: string;
    address2: string;
    country: string;
    city: string;
    state: string;
    pincode: string;
  };
  documents: File[];
};
