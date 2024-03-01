import { Injectable, Logger } from "@nestjs/common";
import { RabbitSubscribe } from "@golevelup/nestjs-rabbitmq";

@Injectable()
export class Consumer2Service {
  private readonly logger = new Logger(Consumer2Service.name);

  getHello(): string {
    return "Hello World!";
  }

  @RabbitSubscribe({
    exchange: "amq.direct",
    routingKey: "post_created",
    queue: "pub_queue",
  })
  public async pubSubHandler(message: string) {
    this.logger.debug(`Received message: ${message}`);
  }
}
