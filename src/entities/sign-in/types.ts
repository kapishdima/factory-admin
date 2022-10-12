export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  email: string;
  name: string;
  token: string;
};
