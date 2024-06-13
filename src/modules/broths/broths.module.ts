import { Module } from '@nestjs/common';
import { BrothsService } from './broths.service';
import { BrothsController } from './broths.controller';

@Module({
  controllers: [BrothsController],
  providers: [BrothsService],
})
export class BrothsModule {}
