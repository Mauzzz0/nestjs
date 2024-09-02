import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HealthCheck, HealthCheckResult, HealthCheckService } from '@nestjs/terminus';
import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE_TOKEN } from '../database/sequelize.provider';

@ApiTags('Health check')
@Controller('health-check')
export class HealthController {
  private logger = new Logger(HealthController.name);

  constructor(
    private health: HealthCheckService,

    @Inject(SEQUELIZE_TOKEN)
    private readonly sequelize: Sequelize,
  ) {}

  @Get('/liveness')
  @HealthCheck()
  public liveness(): Promise<HealthCheckResult> {
    return this.health.check([() => ({ app: { status: 'up' } })]);
  }

  @Get('/readiness')
  @HealthCheck()
  public async readiness(): Promise<HealthCheckResult> {
    try {
      const [pg] = await Promise.allSettled([this.sequelize.query('select 1 + 1')]);

      const statuses = {
        fulfilled: 'up',
        rejected: 'down',
      } as const;

      return this.health.check([() => ({ postgresql: { status: statuses[pg.status] } })]);
    } catch (err) {
      this.logger.error('HEALTH_CHECK_ERROR');
      throw err;
    }
  }
}
