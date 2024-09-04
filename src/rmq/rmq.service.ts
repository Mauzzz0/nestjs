import { setTimeout } from 'node:timers/promises';

import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { MessageHandlerErrorBehavior } from '@golevelup/nestjs-rabbitmq/lib/amqp/errorBehaviors';
import { Controller } from '@nestjs/common';

@Controller()
export class RmqService {
  @RabbitSubscribe({
    queue: 'nestjs-1',
    errorBehavior: MessageHandlerErrorBehavior.ACK,
  })
  async nestjs1(a: any) {
    await setTimeout(2000);
    console.log('1', a);
  }

  @RabbitSubscribe({
    queue: 'nestjs-2',
  })
  nestjs2(a: any) {
    console.log('2', a);
  }
}
