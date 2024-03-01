import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { RmqModule } from "@lib/rmq";

import { Consumer1Controller } from "./consumer-1.controller";
import { Consumer1Service } from "./consumer-1.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    RmqModule.forRoot(),
  ],
  controllers: [Consumer1Controller],
  providers: [Consumer1Service],
})
export class Consumer1Module {}
