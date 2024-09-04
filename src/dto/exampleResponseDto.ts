import { ApiProperty } from '@nestjs/swagger';

export class ExampleResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  nick: string;
}
