import { Controller, Get } from "@nestjs/common";
import { Consumer2Service } from "./consumer-2.service";

@Controller()
export class Consumer2Controller {
  constructor(private readonly consumer2Service: Consumer2Service) {}

  @Get()
  getHello(): string {
    return this.consumer2Service.getHello();
  }
}
