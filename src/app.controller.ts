import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ExampleQueryDto } from './dto/exampleQueryDto';

@ApiTags('asd')
@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post('')
  async post(@Query() query: ExampleQueryDto) {
    return query;
  }

  @Get('2')
  async push2() {
    return this.amqpConnection.publish('nestjs-exchange-1', 'nestjs-2', 'This message 2!!');
  }
}
