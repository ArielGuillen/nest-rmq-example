import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { Consumer2Module } from "./consumer-2.module";

async function bootstrap() {
  const port = 4002;
  const app = await NestFactory.create(Consumer2Module);
  await app.listen(port);
  Logger.verbose(`Comsumer-2 service is running on port ${port}`);
}
bootstrap();
