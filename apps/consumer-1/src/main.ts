import { NestFactory } from "@nestjs/core";
import { Consumer1Module } from "./consumer-1.module";

async function bootstrap() {
  const app = await NestFactory.create(Consumer1Module);
  await app.listen(3000);
}
bootstrap();
