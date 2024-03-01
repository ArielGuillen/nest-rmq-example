import { Test, TestingModule } from '@nestjs/testing';
import { Consumer2Controller } from './consumer-2.controller';
import { Consumer2Service } from './consumer-2.service';

describe('Consumer2Controller', () => {
  let consumer2Controller: Consumer2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Consumer2Controller],
      providers: [Consumer2Service],
    }).compile();

    consumer2Controller = app.get<Consumer2Controller>(Consumer2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(consumer2Controller.getHello()).toBe('Hello World!');
    });
  });
});
