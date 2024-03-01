import { NestFactory } from "@nestjs/core";
import { Consumer2Module } from "./consumer-2.module";

async function bootstrap() {
  const app = await NestFactory.create(Consumer2Module);
  await app.listen(3000);
}
bootstrap();
