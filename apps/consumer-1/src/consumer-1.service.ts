import { Injectable } from "@nestjs/common";

@Injectable()
export class Consumer1Service {
  getHello(): string {
    return "Hello World!";
  }
}
