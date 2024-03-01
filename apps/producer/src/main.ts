import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { ProducerModule } from "./producer.module";

async function bootstrap() {
  const port = 4000;
  const app = await NestFactory.create(ProducerModule);
  await app.listen(4000);
  Logger.verbose(`Producer service is running on port ${port}`);
}
bootstrap();
