import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppConfigDto } from 'config/dto/app.config.dto';
import { SequelizeOptions } from 'sequelize-typescript';

import { CONFIG_BASE_PATH } from './constants';

@Injectable()
export class AppConfigService {
  private readonly logger = new Logger(AppConfigService.name);

  constructor(private config: ConfigService) {}

  public get env(): AppConfigDto {
    const config = this.config.get<AppConfigDto>(CONFIG_BASE_PATH);

    if (!config) {
      this.logger.error(`Config [${CONFIG_BASE_PATH}] is not set`);
      this.logger.error('Exit process');
      process.exit(1);
    }

    return config;
  }

  public get port(): number {
    return this.env.port;
  }

  public get sequelizeOptions(): SequelizeOptions {
    const { read, write } = this.env.postgres;

    return { replication: { write, read: [read] } };
  }

  public get rabbitConnectionString(): string {
    const { user, password, host, port } = this.env.rabbit;

    return `amqp://${user}:${password}@${host}:${port}`;
  }
}
