import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { bootstrapSwagger } from './bootstrap/swagger.bootstrap';

export async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);

  bootstrapSwagger(app);

  await app.listen(2000);
}

bootstrap();
