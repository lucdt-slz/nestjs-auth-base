import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { API_PREFIX_PATH, PORT } from '@configs/app.config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(API_PREFIX_PATH);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(PORT);

  Logger.log(`http://localhost:${PORT}${API_PREFIX_PATH}`);
}
bootstrap();
