import { ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";

import { RabbitMQModule } from "@golevelup/nestjs-rabbitmq";
import { RmqService } from "./rmq.service";

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static forRoot() {
    return {
      module: RmqModule,
      imports: [
        RabbitMQModule.forRootAsync(RabbitMQModule, {
          useFactory: (configService: ConfigService) => ({
            exchanges: [{ name: "amq.direct", type: "direct" }],
            uri: configService.get<string>("RABBIT_MQ_URI"),
            connectionInitOptions: { wait: false },
            enableControllerDiscovery: false,
          }),
          inject: [ConfigService],
        }),
      ],
      exports: [RabbitMQModule],
    };
  }
}
