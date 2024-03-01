import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { Consumer1Module } from "./consumer-1.module";

async function bootstrap() {
  const port = 4001;
  const app = await NestFactory.create(Consumer1Module);
  await app.listen(port);
  Logger.verbose(`Comsumer-1 service is running on port ${port}`);
}
bootstrap();
