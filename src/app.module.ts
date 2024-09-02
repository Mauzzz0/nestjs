import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { RmqService } from './rmq.service';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'nestjs-exchange-1',
          type: 'topic',
        },
      ],
      uri: 'amqp://rabbit:rabbitpassword@localhost:3140',
      channels: {
        'nestjs-channel-1': {
          prefetchCount: 15,
          default: true,
        },
        'nestjs-channel-2': {
          prefetchCount: 2,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [RmqService],
})
export class AppModule {}
