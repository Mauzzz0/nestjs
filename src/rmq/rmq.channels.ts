import { RabbitMQConfig } from '@golevelup/nestjs-rabbitmq/lib/rabbitmq.interfaces';

const RABBIT_MQ_DEFAULT_EXCHANGE = 'nestjs-exchange-1';
const RABBIT_MQ_DEFAULT_CHANNEL = 'nestjs-channel-1';

export const rabbitMqConfig: Omit<RabbitMQConfig, 'uri'> = {
  exchanges: [
    {
      name: RABBIT_MQ_DEFAULT_EXCHANGE,
      type: 'direct',
    },
  ],
  channels: {
    [RABBIT_MQ_DEFAULT_CHANNEL]: {
      prefetchCount: 2,
      default: true,
    },
  },
};
