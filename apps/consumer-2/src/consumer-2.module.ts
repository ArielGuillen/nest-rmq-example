import { Module } from "@nestjs/common";
import { Consumer2Controller } from "./consumer-2.controller";
import { Consumer2Service } from "./consumer-2.service";

@Module({
  imports: [],
  controllers: [Consumer2Controller],
  providers: [Consumer2Service],
})
export class Consumer2Module {}
