import { NestFactory } from '@nestjs/core';
import { AppRouter } from './app/app.router';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {

  const app = await NestFactory.create(AppRouter);

  app.use(cookieParser());
  await app.listen(3000);

}
bootstrap();
