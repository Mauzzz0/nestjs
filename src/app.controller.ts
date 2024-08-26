import { Controller, Get, Inject } from '@nestjs/common';
import { ClientRMQ, Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('SERVICE_1')
    private readonly rmq: ClientRMQ,
  ) {}

  @Get('1')
  async push1() {
    this.rmq.emit('nestjs_1', '{"que": 1}');
    return true;
  }

  @EventPattern('nestjs_1')
  nestjs1(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(data);
  }
}
