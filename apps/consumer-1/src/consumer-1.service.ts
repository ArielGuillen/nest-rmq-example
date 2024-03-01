import { RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class Consumer1Service {
  private readonly logger = new Logger(Consumer1Service.name);
  getHello(): string {
    return "Hello World!";
  }

  @RabbitSubscribe({
    exchange: "amq.direct",
    routingKey: "messages",
    queue: "pub_queue",
  })
  public async pubSubHandler(message: string) {
    this.logger.debug(`Received message: ${message}`);
  }
}
