import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { bootstrapMicroservices } from './bootstrap/microservices.bootstrap';
import { bootstrapSwagger } from './bootstrap/swagger.bootstrap';

export async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);

  bootstrapSwagger(app);
  await bootstrapMicroservices(app);

  await app.listen(2000);
}

bootstrap();
