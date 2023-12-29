import { Test, TestingModule } from '@nestjs/testing';
import { DragonsController } from './dragons.controller';

describe('DragonsController', () => {
  let controller: DragonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DragonsController],
    }).compile();

    controller = module.get<DragonsController>(DragonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
