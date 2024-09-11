import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import dayjs from 'dayjs';

import { ExampleEntity } from './database/entities';
import { ApiPaginatedResponse } from './decorators';
import { ExampleResponseDto } from './dto/exampleResponseDto';
import { queue1 } from './rmq/rmq.queues';
import { RmqService } from './rmq/rmq.service';

@ApiTags('App')
@Controller('app')
export class AppController {
  constructor(
    @Inject(ExampleEntity.name)
    private readonly examples: typeof ExampleEntity,

    private readonly rmqService: RmqService,
  ) {}

  @ApiPaginatedResponse(ExampleResponseDto)
  @Get('')
  async get() {
    return this.rmqService.publish(queue1, { example: 10, date: dayjs().toISOString() });
  }

  @ApiOkResponse({ type: ExampleResponseDto })
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.examples.findOne({ where: { id: Number(id) } });
  }
}
