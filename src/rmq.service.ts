import { RabbitRPC } from '@golevelup/nestjs-rabbitmq';
import { Controller } from '@nestjs/common';

@Controller()
export class RmqService {
  @RabbitRPC({
    exchange: 'nestjs-exchange-1',
    routingKey: 'nestjs-1',
    queue: 'nestjs-1',
  })
  nestjs1(a: any) {
    console.log('1', a);
  }

  @RabbitRPC({
    exchange: 'nestjs-exchange-1',
    routingKey: 'nestjs-2',
    queue: 'nestjs-2',
  })
  nestjs2(a: any) {
    console.log('2', a);
  }
}
