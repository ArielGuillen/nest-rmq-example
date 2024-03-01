import { Injectable } from "@nestjs/common";

interface RmqRPCConfig {
  EXCHANGE: string;
  PROJECT_ENV: string;
  QUEUE?: string;
}

@Injectable()
export class RmqService {
  static forHandler(route: string, rmqConfig: RmqRPCConfig) {
    const routingKey = rmqConfig.PROJECT_ENV === "dev" ? `${route}_dev` : route;

    return {
      exchange: rmqConfig.EXCHANGE,
      queue: rmqConfig.QUEUE,
      routingKey,
    };
  }

  static forRequest(route: string, rmqConfig: RmqRPCConfig, payload) {
    const routingKey = rmqConfig.PROJECT_ENV === "dev" ? `${route}_dev` : route;

    return {
      exchange: rmqConfig.EXCHANGE,
      payload: payload,
      routingKey,
    };
  }
}
