import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

import { RABBIT_MQ_DEFAULT_EXCHANGE } from './rmq.channels';

@Injectable()
export class RmqService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  public async publish(queue: string, data: Record<string, any>): Promise<boolean> {
    return this.amqpConnection.publish(RABBIT_MQ_DEFAULT_EXCHANGE, queue, data);
  }
}
