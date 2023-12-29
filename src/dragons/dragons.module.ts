import { Module } from '@nestjs/common';
import { DragonsController } from './dragons.controller';
import { DragonsService } from './dragons.service';

@Module({
  controllers: [DragonsController],
  providers: [DragonsService]
})
export class DragonsModule {}
