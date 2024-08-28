import { applyDecorators } from '@nestjs/common';
import { plainToInstance, Transform } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { ValidateNested } from 'class-validator';

export const NestedConfigDto = (cls: ClassConstructor<any>): PropertyDecorator => {
  return applyDecorators(
    ValidateNested(),
    Transform(({ value }) => plainToInstance(cls, value)),
  );
};
