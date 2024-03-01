import { Test, TestingModule } from "@nestjs/testing";
import { Consumer1Controller } from "./consumer-1.controller";
import { Consumer1Service } from "./consumer-1.service";

describe("Consumer1Controller", () => {
  let consumer1Controller: Consumer1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Consumer1Controller],
      providers: [Consumer1Service],
    }).compile();

    consumer1Controller = app.get<Consumer1Controller>(Consumer1Controller);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(consumer1Controller.getHello()).toBe("Hello World!");
    });
  });
});
