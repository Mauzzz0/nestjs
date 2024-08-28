import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

enum ExampleEnum {
  ab = 'ab',
  cd = 'cd',
  ef = 'ef',
  gh = 'gh',
}

export class ExampleQueryDto {
  @ApiProperty({ example: 'Ну просто пример имени' })
  name: string;

  @ApiPropertyOptional({ example: 100 })
  id?: number;

  @ApiPropertyOptional({ isArray: true, type: Number })
  ages?: number[];

  @ApiProperty({ enum: ExampleEnum })
  typeOne: ExampleEnum;

  @ApiProperty({ enum: ExampleEnum, isArray: true })
  typeMany: ExampleEnum[];
}
