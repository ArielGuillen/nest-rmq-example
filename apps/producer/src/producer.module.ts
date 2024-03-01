import { Module } from "@nestjs/common";
import { RmqModule } from "@lib/rmq";

import { ProducerController } from "./producer.controller";
import { ProducerService } from "./producer.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    RmqModule.forRoot(),
  ],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}
