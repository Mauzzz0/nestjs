import { MessageHandlerErrorBehavior, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

import { queue1, queue2 } from './rmq.queues';

export class RmqHandler {
  @RabbitSubscribe({ queue: queue1, errorBehavior: MessageHandlerErrorBehavior.ACK })
  async nestjs1(a: Record<string, any>) {
    console.log('1', a);
  }

  @RabbitSubscribe({ queue: queue2 })
  nestjs2(a: Record<string, any>) {
    console.log('2', a);
  }
}
