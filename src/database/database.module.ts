import { Global, Module } from '@nestjs/common';

import { entities } from './entities/entities';
import { createSequelizeProvider } from './sequelize.provider';

const sequelize = createSequelizeProvider();

export const entityProviders = entities.map((model) => ({
  provide: model.name,
  useValue: model,
}));

@Global()
@Module({
  providers: [sequelize, ...entityProviders],
  exports: [sequelize, ...entityProviders],
})
export class DatabaseModule {}
