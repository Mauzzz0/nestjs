import { AppConfigDto } from 'config/dto/app.config.dto';

type EnvStructure<T = any> = {
  [key in keyof T]: T[key] extends object ? EnvStructure<T[key]> : string | undefined;
};

const configMap = (): EnvStructure<AppConfigDto> => ({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  postgres: {
    read: {
      host: process.env.POSTGRES_READ_HOST,
      port: process.env.POSTGRES_READ_PORT,
      username: process.env.POSTGRES_READ_USER,
      password: process.env.POSTGRES_READ_PASSWORD,
      database: process.env.POSTGRES_READ_DB,
    },
    write: {
      host: process.env.POSTGRES_WRITE_HOST,
      port: process.env.POSTGRES_WRITE_PORT,
      username: process.env.POSTGRES_WRITE_USER,
      password: process.env.POSTGRES_WRITE_PASSWORD,
      database: process.env.POSTGRES_WRITE_DB,
    },
  },
  rabbit: {
    host: process.env.RABBITMQ_HOST,
    port: process.env.RABBITMQ_PORT,
    user: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASSWORD,
  },
});

export default configMap;
