import { Controller, Get } from '@nestjs/common';
import { Consumer1Service } from './consumer-1.service';

@Controller()
export class Consumer1Controller {
  constructor(private readonly consumer1Service: Consumer1Service) {}

  @Get()
  getHello(): string {
    return this.consumer1Service.getHello();
  }
}
