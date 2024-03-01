import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProducerService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  getHello(): string {
    return "Hello World!";
  }

  publishMessage(message: string) {
    this.amqpConnection.publish("amq.direct", "messages", message);
    return `${message}`;
  }
}
