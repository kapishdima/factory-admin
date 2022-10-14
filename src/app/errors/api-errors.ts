type ApiError = {
  status: number;
  message: string;
};

const FatalError: ApiError = {
  status: 500,
  message: 'Something went wrong',
};
const ApiErrors: ApiError[] = [
  {
    status: 401,
    message: 'User unauthorized',
  },
  FatalError,
];

export const getApiError = (status: number) => {
  return ApiErrors.find((error) => error.status === status) || FatalError;
};
