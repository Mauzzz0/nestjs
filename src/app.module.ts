import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { HealthModule } from './health/health.module';
import { RmqModule } from './rmq/rmq.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, HealthModule, RmqModule],
  controllers: [AppController],
})
export class AppModule {}
