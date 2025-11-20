import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Listen on 0.0.0.0 so Docker exposes it
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');

  const config = new DocumentBuilder()
    .setTitle('N2 Commerce API')
    .setDescription('API documentation for N2 Commerce project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
