import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { bootstrapPipes } from './bootstrap/pipes.bootstrap';
import { bootstrapSwagger } from './bootstrap/swagger.bootstrap';
import { AppConfigService } from './config/app.config.service';
import { Environment } from './config/constants';
import { DEVELOPMENT_STRATEGY, PinoService, PRODUCTION_STRATEGY } from './logger';

export async function bootstrap() {
  const pinoStrategy =
    process.env.NODE_ENV === Environment.DEV ? DEVELOPMENT_STRATEGY : PRODUCTION_STRATEGY;
  const logger = new PinoService(pinoStrategy);

  const app = await NestFactory.create<INestApplication>(AppModule, { logger });

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
