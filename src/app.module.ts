import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DragonsModule } from './dragons/dragons.module';

@Module({
  imports: [DragonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
