import { Controller, Get, Inject, Param } from '@nestjs/common';
import { QueryTypes } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

import { ExampleEntity } from './database/entities';
import { SEQUELIZE_TOKEN } from './database/sequelize.provider';

@Controller()
export class AppController {
  constructor(
    @Inject(SEQUELIZE_TOKEN)
    private readonly sequelize: Sequelize,

    @Inject(ExampleEntity.name)
    private readonly examples: typeof ExampleEntity,
  ) {}

  @Get('')
  async get() {
    const [result] = await this.sequelize.query<{ version: string }>('select version()', {
      type: QueryTypes.SELECT,
    });

    return result;
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.examples.findOne({ where: { id: Number(id) } });
  }
}
