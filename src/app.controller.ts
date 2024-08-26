import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Get('1')
  async push1() {
    return this.amqpConnection.publish('nestjs-exchange-1', 'nestjs-1', 'This message 1!!');
  }

  @Get('2')
  async push2() {
    return this.amqpConnection.publish('nestjs-exchange-1', 'nestjs-2', 'This message 2!!');
  }
}
