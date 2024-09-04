import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class RabbitConfigDto {
  @IsString()
  readonly host: string;

  @IsNumber()
  @Type(() => Number)
  readonly port: number;

  @IsString()
  readonly user: string;

  @IsString()
  readonly password: string;
}
