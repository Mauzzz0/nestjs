import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';

import { AppConfigService } from '../config/app.config.service';
import { rabbitMqConfig } from './rmq.channels';
import { RmqHandler } from './rmq.handler';
import { RmqService } from './rmq.service';

const rabbitMqModule = RabbitMQModule.forRootAsync(RabbitMQModule, {
  useFactory: (config: AppConfigService) => ({
    ...rabbitMqConfig,
    uri: config.rabbitConnectionString,
  }),
  inject: [AppConfigService],
});

@Global()
@Module({
  providers: [RmqHandler, RmqService],
  imports: [rabbitMqModule],
  exports: [rabbitMqModule, RmqService],
})
export class RmqModule {}
