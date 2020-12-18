import { EnvValidation } from 'env/validation';


const getAppMode = () => {
  const { NODE_ENV } = process.env;
  const validation = new EnvValidation('NODE_ENV', NODE_ENV);
  validation.required();
  validation.string();

  return NODE_ENV;
};

export const isDevelopmentMode = getAppMode() === 'development';
