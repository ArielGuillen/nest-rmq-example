import { Injectable } from "@nestjs/common";

@Injectable()
export class Consumer2Service {
  getHello(): string {
    return "Hello World!";
  }
}
