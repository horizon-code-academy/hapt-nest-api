import { Test, TestingModule } from '@nestjs/testing';
import { SessionDateController } from './session-date.controller';

describe('SessionDateController', () => {
  let controller: SessionDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionDateController],
    }).compile();

    controller = module.get<SessionDateController>(SessionDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
