import { Type } from 'class-transformer';
import { IsEnum, IsInt, Max, Min } from 'class-validator';
import { Environment } from 'config/constants';

import { NestedConfigDto } from '../../decorators/nested.config.dto';
import { PostgresConfigDto } from './postgres.config.dto';
import { RabbitConfigDto } from './rabbit.config.dto';

export class AppConfigDto {
  @IsEnum(Environment)
  readonly env: Environment;

  @IsInt()
  @Min(1024)
  @Max(65535)
  @Type(() => Number)
  readonly port: number;

  @NestedConfigDto(PostgresConfigDto)
  readonly postgres: PostgresConfigDto;

  @NestedConfigDto(RabbitConfigDto)
  readonly rabbit: RabbitConfigDto;
}
