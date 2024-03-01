import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { RmqModule } from "@lib/rmq";

import { Consumer2Controller } from "./consumer-2.controller";
import { Consumer2Service } from "./consumer-2.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    RmqModule.forRoot(),
  ],
  controllers: [Consumer2Controller],
  providers: [Consumer2Service],
})
export class Consumer2Module {}
