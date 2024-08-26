import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const bootstrapSwagger = (app: INestApplication) => {
  const title = `My API`;
  const version = String(process.env.npm_package_version);

  const config = new DocumentBuilder().setTitle(title).setVersion(version).addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
};
