import { INestApplication } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

export const bootstrapMicroservices = async (app: INestApplication) => {
  const url = 'amqp://rabbit:rabbitpassword@localhost:3140';

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [url],
      queue: 'nestjs_1',
      queueOptions: {
        durable: true,
      },
    },
  });

  await app.startAllMicroservices();
};
