import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProducerService } from "./producer.service";

@Controller()
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Get()
  getHello(): string {
    return this.producerService.getHello();
  }

  @Post("publish-message")
  async publishMessage(@Body() body: { message: string }) {
    return this.producerService.publishMessage(body.message);
  }
}
