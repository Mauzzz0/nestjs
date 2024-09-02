import { Controller, Logger, Post, Query } from '@nestjs/common';

import { ExampleQueryDto } from './dto/exampleQueryDto';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Post('')
  async post(@Query() query: ExampleQueryDto) {
    this.logger.log('Пришел запрос POST /');
    return query;
  }
}
