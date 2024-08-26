import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_1',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbit:rabbitpassword@localhost:3140'],
          queue: 'nestjs_1',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
