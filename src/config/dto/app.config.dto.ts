import { Type } from 'class-transformer';
import { IsEnum, IsInt, Max, Min } from 'class-validator';
import { Environment } from 'config/constants';

export class AppConfigDto {
  @IsEnum(Environment)
  readonly env: Environment;

  @IsInt()
  @Min(1024)
  @Max(65535)
  @Type(() => Number)
  readonly port: number;
}
