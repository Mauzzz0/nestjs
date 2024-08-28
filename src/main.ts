import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { bootstrapPipes } from './bootstrap/pipes.bootstrap';
import { bootstrapSwagger } from './bootstrap/swagger.bootstrap';
import { AppConfigService } from './config/app.config.service';

export async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);

  bootstrapSwagger(app);
  bootstrapPipes(app);

  const configService = app.get(AppConfigService);
  const port = configService.port;

  await app.listen(port, () => {
    console.log(
      `The server started listening for incoming connections on port ${port}`,
      'Bootstrap',
    );
  });
}

bootstrap();
