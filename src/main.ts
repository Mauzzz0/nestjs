import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { bootstrapPipes } from './bootstrap/pipes.bootstrap';
import { bootstrapSwagger } from './bootstrap/swagger.bootstrap';

export async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);

  bootstrapSwagger(app);
  bootstrapPipes(app);

  await app.listen(2000);
}

bootstrap();
