import { AppConfigDto } from 'config/dto/app.config.dto';

type EnvStructure<T = any> = {
  [key in keyof T]: T[key] extends object ? EnvStructure<T[key]> : string | undefined;
};

const configMap = (): EnvStructure<AppConfigDto> => ({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
});

export default configMap;
